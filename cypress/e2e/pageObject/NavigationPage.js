class NavigationPage {
   
    elements = {
        sidebarToggle: () => cy.get('[data-test="sidenav-toggle"]'),
        homeSidebarMenuOption: () => cy.get('[data-test="sidenav-home"]'),
        myAccountSidebarMenuOption: () => cy.get('[data-test="sidenav-user-settings"]'),
        bankAccountsSidebarMenuOption: () => cy.get('[data-test="sidenav-bankaccounts"]'),
        notificationsSidebarMenuOption: () => cy.get('[data-test="sidenav-notifications"]'),
        logoutSidebarMenuOption: () => cy.get('[data-test="sidenav-signout"]'),
    }

    selectToggleSidebarMenuOption() {
        this.elements.myAccountSidebarMenuOption().click();
    }

    selectMyAccountSidebarMenuOption() {
        this.elements.myAccountSidebarMenuOption().click();
    }

    selectMyBankAccountsSidebarMenuOption() {
        this.elements.myBankAccountsSidebarMenuOption().click();
    }

    selectNotificationSidebarMenuOption() {
        this.elements.notificationsSidebarMenuOption().click();
    }

    selectLogoutSidebarMenuOption() {
        this.elements.logoutSidebarMenuOption().click();
    }

}

export default NavigationPage;