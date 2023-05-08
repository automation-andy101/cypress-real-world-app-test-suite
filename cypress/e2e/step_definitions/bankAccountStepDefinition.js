/// <reference types="Cypress" />
import { Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor';
import NavigationPage from '../pageObject/NavigationPage';
import BankAccountsPage from '../pageObject/BankAccountsPage';
import LoginPage from '../pageObject/LoginPage';

const navigationPage = new NavigationPage();
const bankAccountsPage = new BankAccountsPage();
const loginPage = new LoginPage();


Given('user has logged into the real world app', () => {
    cy.visit('/');
    loginPage.enterUsername('Katharina_Bernier');
    loginPage.enterPassword('s3cret');
    loginPage.clickSigninBtn();
})

Given('user is on the create bank account page', () => {
    navigationPage.selectBankAccountsSidebarMenuOption();
    bankAccountsPage.clickNewBankAccountButton();
    cy.location("pathname").should("eq", "/bankaccounts/new");
})

Given('a new bank account has been created', () => {
    navigationPage.selectBankAccountsSidebarMenuOption();
    bankAccountsPage.clickNewBankAccountButton();
    cy.location("pathname").should("eq", "/bankaccounts/new");
    bankAccountsPage.enterBankName("NEW Cypress Test Account for DELETE123")
    bankAccountsPage.enterRoutingNumber("123456789")
    bankAccountsPage.enterAccountNumber("987654321")
    bankAccountsPage.clickSaveButton();
})

When('user submits new bank account details', () => {
    bankAccountsPage.enterBankName("Cypress Test Account")
    bankAccountsPage.enterRoutingNumber("123456789")
    bankAccountsPage.enterAccountNumber("987654321")
    bankAccountsPage.clickSaveButton();
})

When('user tries to submit form with empty fields', () => {
    bankAccountsPage.elements.bankNameInput().type("Cypress").find("input").clear().blur();
    bankAccountsPage.elements.routingNumberInput().type("Cypress").find("input").clear().blur();
    bankAccountsPage.elements.accountNumberInput().type("Cypress").find("input").clear().blur();
})

When('user enters invalid form values', () => {
    bankAccountsPage.elements.bankNameInput().type("12");
    bankAccountsPage.elements.routingNumberInput().type("34");
    bankAccountsPage.elements.accountNumberInput().type("56");
})

When('user clicks the Delete button for the previously created bank account', () => {
    bankAccountsPage.searchForBankAccountAndDelete("NEW Cypress Test Account for DELETE123")
})

Then('new bank account is successfully created', () => {
    bankAccountsPage.searchForBankAccountName("Cypress Test Account")
})

Then('form field errors are visible', () => {
    bankAccountsPage.elements.bankNameInputError().should("be.visible").and("contain", "Enter a bank name");
    bankAccountsPage.elements.routingNumberInputError().should("be.visible").and("contain", "Enter a valid bank routing number");
    bankAccountsPage.elements.accountNumberInputError().should("be.visible").and("contain", "Enter a valid bank account number");
})

Then('invalid form field errors are visible', () => {
    bankAccountsPage.elements.bankNameInputError().should("be.visible").and("contain", "Must contain at least 5 characters");
    bankAccountsPage.elements.routingNumberInputError().should("be.visible").and("contain", "Must contain a valid routing number");
    bankAccountsPage.elements.accountNumberInputError().should("be.visible").and("contain", "Must contain at least 9 digits");
})

Then('bank account displays Deleted next to its name in the list', () => {
    bankAccountsPage.searchForBankAccountName("NEW Cypress Test Account for DELETE123 (Deleted)");
})
