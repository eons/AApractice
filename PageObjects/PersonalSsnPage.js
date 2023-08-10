class PersonalSsnPage {
  constructor(page) {
    this.ssnTextbox = page.locator("#ssn");
    this.confimSsnTextbox = page.locator("#ssnConfirm");
    this.nextButton = page.locator(
      "//a[data-testid = 'formPersonalSsn-submit-button']"
    );
  }
}
module.exports = { PersonalSsnPage };
