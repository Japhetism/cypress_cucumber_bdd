import { 
  Given, When, Then 
} from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../pageObjects/pages/login_page";
import ProfilePage from "../pageObjects/pages/profile_page";

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