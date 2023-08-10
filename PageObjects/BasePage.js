class BasePage
{
    constructor(page)
    {
        this.page= page
        this.termsPrivacyButton= page.locator("//button[@aria-controls= 'termsModal']")
    }

    async goToQAPage()
    {
        await this.page.goto("https://pfcms.test.c.pfcld.com/online/signin/login")
    }
}
module.exports= {BasePage}