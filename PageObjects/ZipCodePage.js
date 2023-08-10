class ZipCodePage
{
    constructor(page)
    {
        this.zipCodeTextbox= page.locator("#zipCode")
        this.getStartedButton= page.locator("//button[contains(text(), ' Get started ')]")
    }

    async enteringZipcodeAndClicking(_zipcode)
    {
        await this.zipCodeTextbox.type(_zipcode, {delay:250})
        await this.getStartedButton.click()
    }
}
module.exports= {ZipCodePage}