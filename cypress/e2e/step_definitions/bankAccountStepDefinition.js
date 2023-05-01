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
})

When('user submits new bank account details', () => {
    bankAccountsPage.enterBankName("Cypress Test Account")
    bankAccountsPage.enterRoutingNumber("123456789")
    bankAccountsPage.enterAccountNumber("987654321")
    bankAccountsPage.clickSaveButton();
})

Then('new bank account is successfully created', () => {
    bankAccountsPage.searchForBankAccountName("Cypress Test Account")
})

