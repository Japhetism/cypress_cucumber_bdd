Feature: User Login
  In order to use the application
  As a User
  I need to be logged in 
    Scenario: User logs in with correct credentials
    Given the user is on the login page
    When the user tries to login with correct credentials
    Then he should be redirected to the select profile page