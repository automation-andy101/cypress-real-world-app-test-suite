class BankAccountsPage {

    // indexOfDeletedElement = 0;
   
    elements = {
        bankAccountsCreateBtn: () => cy.get('[data-test="bankaccount-new"]'),
        bankNameInput: () => cy.get('[data-test="bankaccount-bankName-input"]'),
        routingNumberInput: () => cy.get('[data-test="bankaccount-routingNumber-input"]'),
        accountNumberInput: () => cy.get('[data-test="bankaccount-accountNumber-input"]'),
        saveBtn: () => cy.get('[data-test="bankaccount-submit"]'),
        listOfAccounts: () => cy.get('[data-test="bankaccount-list"]'),
        deleteAccountBtn: () => cy.get('[data-test="bankaccount-delete"]'),
        bankNameInputError: () => cy.get('#bankaccount-bankName-input-helper-text'),
        routingNumberInputError: () => cy.get('#bankaccount-routingNumber-input-helper-text'),
        accountNumberInputError: () => cy.get('#bankaccount-accountNumber-input-helper-text')
    }

    clickNewBankAccountButton() {
        this.elements.bankAccountsCreateBtn().click({force: true});
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

    searchForBankAccountName(name) {
        cy.get('[data-test*="bankaccount-list-item"] > div > div > p').then($els => {
                const texts = [...$els].map(el => el.innerText) 
                const found = texts.includes(name)
                return found
            })
            .then(found => {
                expect(found).to.equal(true);
                if (!found) {
                    cy.log("NOT FOUND!!!");
                } else {
                    cy.log("FOUND THE ITEM!!!");
                }
            })
    }

    searchForBankAccountAndDelete(name) {
        cy.get('[data-test*="bankaccount-list-item"] > div > div > p').each(($el, index, $list) => {
            let getText;
            getText = $el.text();

            if (getText.includes(name) && !(getText.includes(name + " (Deleted)"))) {
                cy.xpath(`/html/body/div/div/main/div[2]/div/div/div/ul/li[${index + 1}]/div/div[2]/button`).click({force: true});
                return false;
            }
        })
    }


}

export default BankAccountsPage;