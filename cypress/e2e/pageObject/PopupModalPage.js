class PopupModalPage {
   
    elements = {
        popupModal: () => cy.get('[data-test="user-onboarding-dialog"]'),
        popupModalNextBtn: () => cy.get('[data-test="user-onboarding-next"]'),
        popupModalBankName: () => cy.get('[data-test="bankaccount-bankName-input"]'),
        popupModalRoutingNumber: () => cy.get('[data-test="bankaccount-routingNumber-input"]'),
        popupModalAccountNumber: () => cy.get('[data-test="bankaccount-accountNumber-input"]'),
        popupModalDoneBtn: () => cy.get('[data-test="user-onboarding-next"]'),
        popupModalSaveBtn: () => cy.get('[data-test="bankaccount-submit"]'),
    }

    clickNextBtn() {
        this.elements.popupModalNextBtn().click();
    }
    
    enterBankName(name) {
        this.elements.popupModalBankName().type(name);
    }

    enterRoutingNumber(number) {
        this.elements.popupModalRoutingNumber().type(number);
    }

    enterAccountNumber(number) {
        this.elements.popupModalAccountNumber().type(number);
    }

    clickDoneBtn() {
        this.elements.popupModalDoneBtn().click();
    }

    clickSaveBtn() {
        this.elements.popupModalSaveBtn().click();
    }
}

export default PopupModalPage;