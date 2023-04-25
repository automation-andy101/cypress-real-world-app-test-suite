Feature: Login functionality

Background: 
    Given user is on the real world app login page

    Scenario: Login to Real World App with exisiting valid credentials    
        When user enters valid credentials
        Then user is successfully logged in


    Scenario: Signup and login with new account
        Given user clicks Sign Up and enters new account credentials
        When user signs in with new account credentials
        # When creates a bank account
        Then user is successfully logged in
        


