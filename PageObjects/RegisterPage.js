class RegisterPage
{
    constructor(page)
    {
        this.createEmailTextbox= page.locator("#input244")
        this.createPasswordTextbox= page.locator("#input251")
        this.registerButton= page.locator("input[type= 'submit']")
        this.backToSignInButton= page.locator("a[data-se= 'back-link']")
    }

    async createAccount(_userName, _password)
    {
        await this.createEmailTextbox.type(_userName)
        await this.createPasswordTextbox.type(_password)
        await this.registerButton.click()
    }
}
module.exports= {RegisterPage}