const {test, expect}= require('@playwright/test')
const {POManager}= require('../PageObjects/POManager')
const { LoginPage } = require('../PageObjects/LoginPage')
const caData= JSON.parse(JSON.stringify(require('../Utils/TestData/States/CaliforniaTestData.json')))

test("Apply now Flow", async ({page})=>
{
    const pomanager= new POManager(page)
    const loginPage= pomanager.getLoginPage()
    const zipcodePage= pomanager.getZipCodePage()
    const registerPage= pomanager.getRegisterPage()
    const personalInformation= pomanager.getPersonalInformationPage()

    await loginPage.goToQAPage()
    await loginPage.applyNowFlow()
    await zipcodePage.enteringZipcodeAndClicking(caData.zipcode)
    await registerPage.createAccount(caData.email, caData.password)
    await personalInformation.fillingPersonalInfoFields(caData.firstName, caData.lastName, caData.dob, caData.phoneNumber)

    await page.pause()
})