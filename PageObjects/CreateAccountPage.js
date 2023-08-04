class CreateAccountPage extends BasePage
{
    constructor(page)
    {
        this.emailTextbox= page.locator("#input244")
        this.passwordTextbox= page.locator("input251")
        this.registerButton= page.locator("input[type= 'submit']")
        this.backToSignInButton= page.locator("a[data-se= 'back-link']")
    }
}
module.exports= {CreateAccountPage}