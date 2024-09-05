Feature: Account Creation 

  Scenario: Register with new user and log in into the application
    Given User navigate to the Magento app
    When User tap on create account link
    And User enter the detail on registration form
      | Field             | Value         |
      | FirstName         | Parveen       |
      | LastName          | Kumar         |
      | Email             |               |
      | Password          | Abcd@123      |
      | ConfirmPassword   | Abcd@123      |
    And User tap on the registration button
    Then User should be logged in into the app with message "Thank you for registering with Main Website Store." 

  
