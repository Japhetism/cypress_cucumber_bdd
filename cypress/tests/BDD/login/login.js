import { 
  Given, When, Then 
} from "cypress-cucumber-preprocessor/steps";
import { LoginPage, ProfilePage } from "../pageObjects/pages";

Given(/^the user is on the login page$/, () => {
  cy.fixture('login').then(function(loginData) {
    this.loginData = loginData;
  })
  LoginPage.visitLoginPage();
});

When(/^the user tries to login with correct credentials$/, function () {
  const { username, password } = this.loginData;
  LoginPage.fillUsername(username);
  LoginPage.fillPassword(password);
  LoginPage.submitLoginDetails();
});

Then(/^he should be redirected to the select profile page/, () => {
  ProfilePage.verifyIsOnProfilePage();
});