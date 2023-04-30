class BankAccountsPage {
   
    elements = {
        bankAccountsCreateBtn: () => cy.get('[data-test="bankaccount-new"]'),
        bankNameInput: () => cy.get('[data-test="bankaccount-bankName-input"]'),
        routingNumberInput: () => cy.get('[data-test="bankaccount-routingNumber-input"]'),
        accountNumberInput: () => cy.get('[data-test="bankaccount-accountNumber-input"]'),
        saveBtn: () => cy.get('[data-test="bankaccount-submit"]'),
        listOfAccounts: () => cy.get('[data-test="bankaccount-list"]')
    }

    clickNewBankAccountButton() {
        this.elements.bankAccountsCreateBtn().click();
    }

    enterBankName(bankName) {
        this.elements.bankNameInput().type(bankName);
    }

    enterRoutingNumber(routingNumber) {
        this.elements.routingNumberInput().type(routingNumber);
    }

    enterAccountNumber(accountNumber) {
        this.elements.accountNumberInput().type(accountNumber);
    }

    clickSaveButton() {
        this.elements.saveBtn().click();
    }

}

export default BankAccountsPage;