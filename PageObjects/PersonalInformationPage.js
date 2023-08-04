class PersonalInformationPage {
  constructor(page) {
    this.firstNameTextbox = page.locator("#firstName");
    this.lastNameTextbox = page.locator("#lastName");
    this.dateofBirthPicker = page.locator("#dateOfBirth");
    this.mobileNumberTextbox = page.locator("#currentPhone");
    this.checkbox = page.locator("#smsOptin");
    this.exitModal = page.locator("//a[@data-bs-target= 'exitModal']");
    this.nextButton = page.locator(
      "//a[data-testid = 'formPersonalInformation-submit-button']"
    );
  }
}
module.exports = { PersonalInformationPage };
