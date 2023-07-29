const {test, expect}= require('@playwright/test')
const {POManager}= require('../PageObjects/POManager')
const caData= JSON.parse(JSON.stringify(require('../Utils/TestData/CaTestData.json')))

test("Apply now Flow", async ({page})=>
{
    const pomanager= new POManager(page)
    const loginPage= pomanager.getLoginPage()
    const zipcodePage= pomanager.getZipCodePage()
    const createAccountPage= pomanager.getCreateAccountPage()

    await zipcodePage.enteringZipcodeAndClicking(zipcode)
    await page.pause()
})