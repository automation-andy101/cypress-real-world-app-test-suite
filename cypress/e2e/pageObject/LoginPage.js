class LoginPage {
   
    elements = {
        usernameInput: () => cy.get('[data-test="signin-username"]'),
        passwordInput: () => cy.get('[data-test="signin-password"]'),
        signinBtn: () => cy.get('[data-test="signin-submit"]'),
        signupLink: () => cy.get('[data-test="signup"]'),
        invalidUsernameOrPasswordError: () => cy.get('[data-test="signin-error"]'),
        usernameIsRequiredError: () => cy.get('#username-helper-text'),
        passwordMustContain4CharactersError: () => cy.get('#password-helper-text'),
    }

    enterUsername(username) {
        this.elements.usernameInput().type(username);
    }

    enterPassword(password) {
        this.elements.passwordInput().type(password);
    }

    clickSigninBtn() {
        this.elements.signinBtn().click();
    }

    clickSignupLink() {
        this.elements.signupLink().click();
    }
}

export default LoginPage;