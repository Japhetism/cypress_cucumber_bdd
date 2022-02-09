import { 
  Given, When, Then 
} from "cypress-cucumber-preprocessor/steps";
import { LoginPage, ProfilePage } from "../pageObjects/pages";

Given(/^the user is on the login page$/, () => {
  LoginPage.visitLoginPage();
});

When(/^the user tries to login with correct credentials$/, () => {
  const username = "";
  const password = "";
  LoginPage.fillUsername(username);
  LoginPage.fillPassword(password);
  LoginPage.submitLoginDetails();
});

Then(/^he should be redirected to the select profile page/, () => {
  ProfilePage.verifyIsOnProfilePage();
});