Feature: Login functionality

Background: 
    Given user is on the real world app login page

    Scenario: Login to Real World App with valid credentials    
        When user enters valid credentials
        Then user is successfully logged in


    Scenario: Signup and login with new account
        Given user clicks Sign Up and enters new account credentials
        When user signs in with new account credentials
        Then user is successfully logged in


    Scenario: Errors are visible with signing up with invalid credentials
        Given user clicks Sign Up link
        When user enters empty values for each input field
        Then form field validation errors are visible


    Scenario: User is not logged in when supplying incorrect username credentials
        When user enters an invalid username
        Then user is not logged in
        And username or password is invalid error message is visible


    Scenario: User is not logged in when supplying incorrect password credentials
        When user enters an invalid password
        Then user is not logged in
        And username or password is invalid error message is visible


    Scenario: Login page errors are visible when not entering a username or password that is too short
        When user leaves username input empty
        And enters a short password
        Then Username is required error is visible
        And Password must contain at least 4 characters error is visible

