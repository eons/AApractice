class EmployerInformationPage {
  constructor(page) {
    this.employerNameTextbox = page.locator("#employerName");
    this.exitModal = page.locator("//a[@data-bs-target= 'exitModal']");
    this.nextButton = page.locator(
      "//a[data-testid = 'formEmployerInformation-submit-button']"
    );
  }
}
module.exports = { EmployerInformationPage };
