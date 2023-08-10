class PersonalInformationPage {
  constructor(page) {
    this.page= page
    this.firstNameTextbox = page.locator("#firstName")
    this.lastNameTextbox = page.locator("#lastName")
    this.dateofBirthPicker = page.locator("#dateOfBirth")
    this.mobileNumberTextbox = page.locator("#currentPhone")
    this.checkbox = page.locator("#smsOptin")
    this.exitModal = page.locator("//a[@data-bs-target= 'exitModal']")
    this.nextButton = page.locator("//button[contains(text(), ' Next ')]")
  }

  async fillingPersonalInfoFields(_name, _lname, _dob, _mnumber)
  {
    await this.page.waitForTimeout(10000)
    await this.firstNameTextbox.type(_name, {delay:250})
    await this.lastNameTextbox.type(_lname, {delay:250})
    await this.dateofBirthPicker.type(_dob, {delay:250})
    await this.mobileNumberTextbox.type(_mnumber, {delay:250})

    await this.nextButton.click()
  }
}
module.exports = { PersonalInformationPage }
