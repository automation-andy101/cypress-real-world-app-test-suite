class LoginPage {
   
    elements = {
        usernameInput: () => cy.get('[data-test="signin-username"]'),
        passwordInput: () => cy.get('[data-test="signin-password"]'),
        signupLink: () => cy.get('[data-test="signup"]'),
        signinBtn: () => cy.get('[data-test="signin-submit"]'),
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