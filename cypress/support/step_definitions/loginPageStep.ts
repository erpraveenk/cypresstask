import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from '../../integration/pages-objects/loginPage';

When('User tap on the Login link', () => {
  loginPage.getLoginLink();
});

When('User enter the login details', (dataTable: any) => {
  const data = dataTable.rowsHash();
  loginPage.enterLoginDetails(data.Email, data.Password);
});

When('User taps on login button', () => {
  loginPage.clickLoginButton();
});

Then('User should be loggged in successfully', () => {
  loginPage.verifyLoginSuccessfully();
});
