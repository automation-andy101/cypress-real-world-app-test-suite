class LoginPage {
   
    elements = {
        usernameInput: () => cy.get('[data-test="signin-username"]'),
        passwordInput: () => cy.get('[data-test="signin-password"]'),
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
}

export default LoginPage;