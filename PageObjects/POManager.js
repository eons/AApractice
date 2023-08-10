const {LoginPage}= require('../PageObjects/LoginPage')
const {DashboardPage}= require('../PageObjects/DashboardPage')
const {ZipCodePage}= require('../PageObjects/ZipCodePage')
const {RegisterPage}= require('../PageObjects/RegisterPage')
const {BankInformationPage} = require("../PageObjects/BankInformationPage")
const {EmployerInformationPage} = require("../PageObjects/EmployerInformationPage")
const {JobStatusPage} = require("../PageObjects/JobStatusPage")
const {PaymentFrequencyPage} = require("../PageObjects/PaymentFrequencyPage")
const {PersonalAddressPage} = require("../PageObjects/PersonalAddressPage")
const {PersonalInformationPage} = require("../PageObjects/PersonalInformationPage")
const {PersonalSsnPage} = require("../PageObjects/PersonalSsnPage")
const {PersonalSummaryPage} = require("../PageObjects/PersonalSummaryPage")


class POManager
{
    constructor(page)
    {
        this.loginPage= new LoginPage(page)
        this.dashboardPage= new DashboardPage(page)
        this.zipcodePage= new ZipCodePage(page)
        this.registerPage= new RegisterPage(page)
        this.bankInformationPage = new BankInformationPage(page)
        this.employerInformationPage = new EmployerInformationPage(page)
        this.jobStatusPage = new JobStatusPage(page)
        this.paymentFrequencyPage = new PaymentFrequencyPage(page)
        this.personalAddressPage = new PersonalAddressPage(page)
        this.personalInformationPage = new PersonalInformationPage(page)
        this.personalSsnPage = new PersonalSsnPage(page)
        this.personalSummaryPage = new PersonalSummaryPage(page)
    }

    getBankInformationPage() {
        return this.bankInformationPage;
      }

    getDashboardPage() {
        return this.dashboardPage;
      }
    getEmployerInformationPage() {
        return this.employerInformationPage;
      }
    getJobStatusPage() {
        return this.jobStatusPage;
      }
    getLoginPage() {
        return this.loginPage;
      }
    getPaymentFrequencyPage() {
        return this.paymentFrequencyPage;
      }
    getPersonalAddressPage() {
        return this.personalAddressPage;
      }
    getPersonalInformationPage() {
        return this.personalInformationPage;
      }
    getPersonalSsnPage() {
        return this.personalSsnPage;
      }
    getPersonalSummaryPage() {
        return this.personalSummaryPage;
      }
    getRegisterPage() {
        return this.registerPage;
      }
    getZipCodePage() {
        return this.zipcodePage;
      }

}
module.exports= {POManager}