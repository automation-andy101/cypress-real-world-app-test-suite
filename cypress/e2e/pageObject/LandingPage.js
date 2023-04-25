class LandingPage {
   
    elements = {
        myAccountSidebarMenuOption: () => cy.get('[data-test="sidenav-user-settings"]'),
        myBankAccountsSidebarMenuOption: () => cy.get('[data-test="sidenav-bankaccounts"]')
    }

    selectMyAccountSidebarMenuOption() {
        this.elements.myAccountSidebarMenuOption().click();
    }

    selectMyBankAccountsSidebarMenuOption() {
        this.elements.myBankAccountsSidebarMenuOption().click();
    }

}

export default LandingPage;