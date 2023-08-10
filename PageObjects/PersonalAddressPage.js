class PersonalAddressPage {
  constructor(page) {
    this.addressTextbox = page.locator("#address1");
    this.unitNumberTextbox = page.locator("#address2");
    this.exitModal = page.locator("//a[@data-bs-target= 'exitModal']");
    this.nextButton = page.locator(
      "//a[data-testid = 'formPersonalAddress-submit-button']"
    );
  }
}
module.exports = { PersonalAddressPage };
