const {LoginPage}= require('../PageObjects/LoginPage')
const {DashboardPage}= require('../PageObjects/DashboardPage')

class POManager
{
    constructor(page)
    {
        this.loginPage= new LoginPage(page)
        this.dashboardPage= new DashboardPage(page)
    }

    getLoginPage()
    {
        return this.loginPage
    }

    getDashboardPage()
    {
        return this.dashboardPage
    }


}
module.exports= {POManager}