/// <reference types="Cypress" />
import { Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../pageObject/LoginPage';

const loginPage = new LoginPage();

Given('user is on the real world app login page', () => {
    cy.visit('/')
})

When('user enters valid credentials', () => {
    loginPage.enterUsername('Katharina_Bernier');
    loginPage.enterPassword('s3cret');
    loginPage.clickSigninBtn();
})

Then('user is successfully logged in', () => {
    cy.log("HELLO")
})

