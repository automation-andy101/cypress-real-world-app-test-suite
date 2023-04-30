/// <reference types="Cypress" />
import { Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor';
import NavigationPage from '../pageObject/NavigationPage';
import BankAccountsPage from '../pageObject/BankAccountsPage';


const navigationPage = new NavigationPage();
const bankAccountsPage = new BankAccountsPage();


Given('user has logged into the real world app', () => {
    cy.visit('/');
    loginPage.enterUsername('Katharina_Bernier');
    loginPage.enterPassword('s3cret');
    loginPage.clickSigninBtn();
})

Given('user is on the create bank account page', () => {
    bankAccountsPage.clickNewBankAccountButton();
})

When('user submits new bank account details', () => {
    bankAccountsPage.enterBankName().type("Cypress Test Account")
    bankAccountsPage.enterRoutingNumber().type("123456789")
    bankAccountsPage.enterAccountNumber().type("987654321")
    bankAccountsPage.clickSaveButton();
})

Then('new bank account is successfully created', () => {
    // signupPage.elements.firstNameInputError().should("be.visible").and("contain", "First Name is required");

})

