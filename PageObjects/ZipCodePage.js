class ZipCodePage {

    constructor(page) {
      this.zipcodeTextbox = page.locator("#zipCode");
      this.nextButton = page.locator(
        "//a[data-testid = 'zip-code-form-submit-button']"
      );
    }
  }
module.exports = { ZipCodePage };