<<<<<<< HEAD
const { BankInformationPage } = require("../PageObjects/BankInformationPage");
const { BasePage } = require("../PageObjects/BasePage");
const { CreateAccountPage } = require("../PageObjects/CreateAccountPage");
const { DashboardPage } = require("../PageObjects/DashboardPage");
const {
  EmployerInformationPage,
} = require("../PageObjects/EmployerInformationPage");
const { JobStatusPage } = require("../PageObjects/JobStatusPage");
const { LoginPage } = require("../PageObjects/LoginPage");
const { PaymentFrequencyPage } = require("../PageObjects/PaymentFrequencyPage");
const { PersonalAddressPage } = require("../PageObjects/PersonalAddressPage");
const {
  PersonalInformationPage,
} = require("../PageObjects/PersonalInformationPage");
const { PersonalSsnPage } = require("../PageObjects/PersonalSsnPage");
const { PersonalSummaryPage } = require("../PageObjects/PersonalSummaryPage");
const { ZipCodePage } = require("../PageObjects/ZipCodePage");
=======
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

>>>>>>> main

class POManager {
  constructor(page) {
    this.bankInformationPage = new BankInformationPage(page);
    this.basePage = new BasePage(page);
    this.createAccountPage = new CreateAccountPage(page);
    this.dashboardPage = new DashboardPage(page);
    this.employerInformationPage = new EmployerInformationPage(page);
    this.jobStatusPage = new JobStatusPage(page);
    this.loginPage = new LoginPage(page);
    this.paymentFrequencyPage = new PaymentFrequencyPage(page);
    this.personalAddressPage = new PersonalAddressPage(page);
    this.personalInformationPage = new PersonalInformationPage(page);
    this.personalSsnPage = new PersonalSsnPage(page);
    this.personalSummaryPage = new PersonalSummaryPage(page);
    this.zipcodePage = new ZipCodePage(page);
  }
  getBankInformationPage() {
    return this.bankInformationPage;
  }
  getBasePage() {
    return this.basePage;
  }
  getCreateAccountPage() {
    return this.createAccountPage;
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
  getZipCodePage() {
    return this.zipcodePage;
  }
}
module.exports = { POManager };
