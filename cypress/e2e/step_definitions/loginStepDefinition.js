/// <reference types="Cypress" />
import { Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../pageObject/LoginPage';
import SignupPage from '../pageObject/SignupPage';
import LandingPage from '../pageObject/LandingPage';
import PopupModalPage from '../pageObject/PopupModalPage';


const loginPage = new LoginPage();
const signupPage = new SignupPage();
const landingPage = new LandingPage();
const popupModalPage = new PopupModalPage();


Given('user is on the real world app login page', () => {
    cy.visit('/');
})

Given('user clicks Sign Up and enters new account credentials', () => {
    cy.visit('/');
    loginPage.clickSignupLink();

    signupPage.enterFirstName("testUserFName");
    signupPage.enterLastName("testUserLName");
    signupPage.enterUsername("testUsername");
    signupPage.enterPassword("pa55w0rd");
    signupPage.enterConfirmPassword("pa55w0rd");

    signupPage.clickSignupBtn();
})

When('user enters valid credentials', () => {
    loginPage.enterUsername('Katharina_Bernier');
    loginPage.enterPassword('s3cret');
    loginPage.clickSigninBtn();
})

When('user signs in with new account credentials', () => {
    loginPage.enterUsername('testUsername');
    loginPage.enterPassword('pa55w0rd');
    loginPage.clickSigninBtn();
})

When('creates a bank account', () => {
    popupModalPage.clickNextBtn();
    popupModalPage.enterBankName("Test Bank Name");
    popupModalPage.enterRoutingNumber("123456789");
    popupModalPage.enterAccountNumber("987654321")
    popupModalPage.clickSaveBtn();
    popupModalPage.clickDoneBtn();
})

Then('user is successfully logged in', () => {
    landingPage.elements.myAccountSidebarMenuOption().should('be.visible');
})

