class BankInformationPage {
  constructor(page) {
    this.routingNumber = page.locator("#routingNumber");
    this.checkingAccNumber = page.locator("#checkingAccNumber");
    this.confirmCheckingAccNumber = page.locator("#confirmCheckingAccNumber");
    this.exitModal = page.locator("//a[@data-bs-target= 'exitModal']");
    this.nextButton = page.locator(
      "//a[data-testid = 'formBankInformation-submit-button']"
    );
  }
}
module.exports = { BankInformationPage };
