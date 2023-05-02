Feature: Bank Accounts Feature

Background: 
    Given user has logged into the real world app
    
    Scenario: Create a new bank account
        Given user is on the create bank account page
        When user submits new bank account details
        Then new bank account is successfully created


    Scenario: Create bank account form validation errors are visible when trying to submit empty fields
        Given user is on the create bank account page
        When user tries to submit form with empty fields
        Then form field errors are visible


    Scenario: Create bank account form validation errors are visible when entering invalid input values
        Given user is on the create bank account page
        When user enters invalid form values
        Then invalid form field errors are visible


    Scenario: Delete bank account
        Given a new bank account has been created
        When user clicks the Delete button for the previously created bank account
        Then bank account displays Deleted next to its name in the list
