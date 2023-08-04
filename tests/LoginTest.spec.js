const {test, expect}= require('@playwright/test')
const {POManager}= require('../PageObjects/POManager')
const loginData= JSON.parse(JSON.stringify(require('../Utils/TestData/LoginTestData.json')))

test("Login example", async ({page})=>
{
    const pomanager= new POManager(page)
    const loginPage= pomanager.getLoginPage()
    const dashboardPage= pomanager.getDashboardPage()

    await loginPage.goToPage(loginData.qa1Url)
    await loginPage.login(loginData.userName, loginData.password)
    await page.pause()
})