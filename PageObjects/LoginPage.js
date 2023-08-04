class LoginPage
{
    constructor(page)
    {
        this.page= page
        this.emailTextbox= page.locator("#okta-signin-username")
        this.passwordTextbox= page.locator("#okta-signin-password")
        this.loginButton= page.locator("//input[@type= 'submit']")
        this.rememberMeCheckbox= page.locator("//label[@for= 'input42']")
        this.loginHelpHyperlink= page.locator("//a[@data-se= 'needhelp']")
        this.applyNowHyperlink= page.locator("//a[@title= 'Apply now']")
        this.termsPrivacyButton= page.locator("//button[@aria-controls= 'termsModal']")
    }

  async login(_userName, _password) {
    await this.emailTextbox.type(_userName);
    await this.passwordTextbox.type(_password);
    await this.loginButton.click();
  }

    async login(_userName, _password)
    {
        await this.emailTextbox.type(_userName)
        await this.passwordTextbox.type(_password)
        await this.loginButton.click()
    }
}
module.exports = { LoginPage };
