Feature: User Login

Scenario: User logged into in with registered account
    Given User navigate to the Magento app
    When User tap on the Login link
    And User enter the login details
      | Email    | abc@gmail.com |
      | Password  | Abcd@123|
    And User taps on login button
    Then User should be loggged in successfully