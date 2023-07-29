class ZipCodePage
{
    constructor(page)
    {
        this.zipCodeTextbox= page.locator("#zipCode")
        this.getStartedButton= page.locator("button[type= 'submit']")
    }

    async enteringZipcodeAndClicking(_zipcode)
    {
        this.zipCodeTextbox.type(_zipcode)
        this.getStartedButton.click()
    }
}
module.exports= {ZipCodePage}