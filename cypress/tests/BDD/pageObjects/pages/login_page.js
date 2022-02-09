class LoginPage {
  static visitLoginPage() {
    cy.visit("/login");
    cy.url().should("include", "login");
  }

  static fillUsername(username) {
    cy.get("input#username[name=username]").type(username);
  }

  static fillPassword(password) {
    cy.get("input#password[name=password").type(password);
  }

  static submitLoginDetails() {
    cy.get("button#kt_login_signin_submit").click();
  }
}

export default LoginPage