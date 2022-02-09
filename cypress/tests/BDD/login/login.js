import { 
  Given, When, Then 
} from "cypress-cucumber-preprocessor/steps";

Given(/^the user is on the login page$/, () => {
  cy.visit("/login");
  cy.url().should("include", "/login");
});

When(/^the user tries to login with correct credentials$/, () => {
  cy.get("input#username[name=username]").type("");
  cy.get("input#password[name=password").type("");
  cy.get("button#kt_login_signin_submit").click();
});

Then(/^he should be redirected to the select profile page/, () => {
  cy.get("div.kt-login__title h3").should("have.text", "Profile");
});