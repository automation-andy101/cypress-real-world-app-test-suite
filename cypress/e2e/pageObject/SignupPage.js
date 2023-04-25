class SignupPage {
   
    elements = {
        firstNameInput: () => cy.get('[data-test="signup-first-name"]'),
        lastNameInput: () => cy.get('[data-test="signup-last-name"]'),
        usernameInput: () => cy.get('[data-test="signup-username"]'),
        passwordInput: () => cy.get('[data-test="signup-password"]'),
        confirmPasswordInput: () => cy.get('[data-test="signup-confirmPassword"]'),
        signupBtn: () => cy.get('[data-test="signup-submit"]'),
    }

    enterFirstName(firstname) {
        this.elements.firstNameInput().type(firstname);
    }

    enterLastName(lastname) {
        this.elements.lastNameInput().type(lastname);
    }

    enterUsername(username) {
        this.elements.usernameInput().type(username);
    }
    
    enterPassword(password) {
        this.elements.passwordInput().type(password);
    }

    enterConfirmPassword(confirmPassword) {
        this.elements.confirmPasswordInput().type(confirmPassword);
    }

    clickSignupBtn() {
        this.elements.signupBtn().click();
    }

}

export default SignupPage;