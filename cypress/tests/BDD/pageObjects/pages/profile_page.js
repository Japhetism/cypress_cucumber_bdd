class ProfilePage {
  static verifyIsOnProfilePage() {
    cy.get("div.kt-login__title h3").should("have.text", "Profile");
  }
}

export default ProfilePage