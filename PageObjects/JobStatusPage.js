class JobStatusPage {
  constructor(page) {
    this.employedRadioButton = page.locator("#jobStatus-0");
    this.selfEmployedRadioButton = page.locator("#jobStatus-1");
    this.otherIncomeRadioButton = page.locator("#jobStatus-2");
    this.exitModal = page.locator("//a[@data-bs-target= 'exitModal']");
    this.nextButton = page.locator(
      "//a[data-testid = 'formJobStatus-submit-button']"
    );
  }
}
module.exports = { JobStatusPage };
