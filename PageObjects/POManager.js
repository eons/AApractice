const {LoginPage}= require('../PageObjects/LoginPage')
const {DashboardPage}= require('../PageObjects/DashboardPage')
const {ZipCodePage}= require('../PageObjects/ZipCodePage')
const {CreateAccountPage}= require('../PageObjects/CreateAccountPage')

class POManager
{
    constructor(page)
    {
        this.loginPage= new LoginPage(page)
        this.dashboardPage= new DashboardPage(page)
        this.zipcodePage= new ZipCodePage(page)
        this.createAccount= new CreateAccountPage(page)
    }

    getLoginPage()
    {
        return this.loginPage
    }

    getDashboardPage()
    {
        return this.dashboardPage
    }

    getZipCodePage()
    {
        return this.zipcodePage
    }

    getCreateAccountPage()
    {
        return this.createAccount
    }


}
module.exports= {POManager}