Feature: Bank Accounts Feature

Background: 
    Given user has logged into the real world app
    
    Scenario: Create a new bank account
        Given user is on the create bank account page
        When user submits new bank account details
        Then new bank account is successfully created



