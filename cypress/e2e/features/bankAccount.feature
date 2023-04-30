Feature: Bank Accounts

Background: 
    Given user has logged into the real world app
    
    Scenario: Login to Real World App with valid credentials 
        Given user is on the create bank account page
        When user submits new bank account details
        Then new bank account is successfully created




