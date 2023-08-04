class PersonalSummaryPage {
  constructor(page) {
    this.exitModal = page.locator("//a[@data-bs-target= 'exitModal']");
    this.nextButton = page.locator(
      "//a[data-testid = 'formPersonalSummary-submit-button']"
    );
  }
}
module.exports = { PersonalSummaryPage };
