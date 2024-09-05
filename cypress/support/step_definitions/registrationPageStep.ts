import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { generateRandomEmail } from '../commands';
import { registerUser } from '../../integration/pages-objects/registrationPage';

Given('User navigate to the Magento app', () => {
  registerUser.navigateToApplication();
});

When('User tap on create account link', () => {
  registerUser.tapCreateAccountLink();
});

When('User enter the detail on registration form', (dataTable: any) => {
  const randomEmail = generateRandomEmail();
  const data = dataTable.rowsHash();
  registerUser.enterRegistrationDetails(data.FirstName, data.LastName, randomEmail, data.Password, data.ConfirmPassword);
});

When('User tap on the registration button', () => {
  registerUser.tapOnRegistrationButton();
});

Then('User should be logged in into the app with message {string}', (message: string) => {
  registerUser.getConfirmationMessage(message);
});
