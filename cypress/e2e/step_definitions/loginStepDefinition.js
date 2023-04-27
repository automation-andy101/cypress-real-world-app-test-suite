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
    loginPage.clickSignupLink();

    signupPage.enterFirstName("testUserFName");
    signupPage.enterLastName("testUserLName");
    signupPage.enterUsername("testUsername");
    signupPage.enterPassword("pa55w0rd");
    signupPage.enterConfirmPassword("pa55w0rd");

    signupPage.clickSignupBtn();
})

Given('user clicks Sign Up link', () => {
    loginPage.clickSignupLink();
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

When('user enters empty values for each input field', () => {
    signupPage.elements.firstNameInput().type("first").find("input").clear().blur();
    signupPage.elements.lastNameInput().type("last").find("input").clear().blur();
    signupPage.elements.usernameInput().type("user").find("input").clear().blur();
    signupPage.elements.passwordInput().type("pass").find("input").clear().blur();
    signupPage.elements.confirmPasswordInput().type("confirm").find("input").clear().blur();
})

When('user enters an invalid username', () => {
    loginPage.enterUsername('Katharina_Bernier_xx');
    loginPage.enterPassword('s3cret');
    loginPage.clickSigninBtn();
})

When('user enters an invalid password', () => {
    loginPage.enterUsername('Katharina_Bernier');
    loginPage.enterPassword('secret');
    loginPage.clickSigninBtn();
})

When('user leaves username input empty', () => {
    loginPage.elements.usernameInput().type("username").find("input").clear().blur();
})

When('enters a short password', () => {
    loginPage.enterPassword('123');
})

Then('user is successfully logged in', () => {
    landingPage.elements.myAccountSidebarMenuOption().should('be.visible');
})

Then('form field validation errors are visible', () => {
    signupPage.elements.firstNameInputError().should("be.visible").and("contain", "First Name is required");
    signupPage.elements.lastNameInputError().should("be.visible").and("contain", "Last Name is required");
    signupPage.elements.usernameInputError().should("be.visible").and("contain", "Username is required");
    signupPage.elements.passwordInputError().should("be.visible").and("contain", "Enter your password");
    signupPage.elements.confirmPasswordInputError().should("be.visible").and("contain", "Confirm your password");
})

Then('user is not logged in', () => {
    cy.location("pathname").should("eq", "/signin/");
})

Then('username or password is invalid error message is visible', () => {
    loginPage.elements.invalidUsernameOrPasswordError().should("be.visible");
})

Then('Username is required error is visible', () => {
    loginPage.elements.usernameIsRequiredError().should("be.visible");
})

Then('Password must contain at least 4 characters error is visible', () => {
    loginPage.elements.passwordMustContain4CharactersError().should("be.visible");
})


