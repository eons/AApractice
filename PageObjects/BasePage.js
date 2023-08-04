class BasePage
{
    constructor(page)
    {
        this.termsPrivacyButton= page.locator("//button[@aria-controls= 'termsModal']")
    }
}
module.exports= {BasePage}

