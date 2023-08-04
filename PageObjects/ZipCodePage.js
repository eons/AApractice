class ZipCodePage {
  constructor(page) {
    this.zipCodeTextbox = page.locator("zipCode");
    this.getStartedButton = page.locator("button[type= 'submit']");
  }
}
module.exports = { ZipCodePage };
