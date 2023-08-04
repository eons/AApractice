class DashboardPage {
  constructor(page) {
    this.advanceAmerica = page.locator(
      "//img[@class = `theme-brand-logo-mobile`]"
    );
    this.dashboard = page.locator(
      "//a[@data-test-id = `global-navigation-desktop-cta-0`]"
    );
    this.storeFinder = page.locator(
      "//a[@data-test-id = `global-navigation-desktop-cta-1`]"
    );
    this.loanHistory = page.locator(
      "//a[@data-test-id = `global-navigation-desktop-cta-2`]"
    );
    this.makePayment = page.locator(
      "//a[@data-test-id = `make-a-payment-card-cta`]"
    );
    this.pastDueTelephone = page.locator(
      "//a[@data-test-id = `banner-past-due-banner-link`]"
    );
    this.referFriends = page.locator("//button[@class = `extole-cta-button`]");
    this.infoButton = page.locator(
      "//a[@data-test-id= `loan-payday-re-finance-card-link`]"
    );
    //footer
    this.aboutUs = page.locator(
      "//a[@data-test-id= `dashboard-footer-about-us-link`]"
    );
    this.careers = page.locator(
      "//a[@data-test-id= `dashboard-footer-careers-link`]"
    );
    this.videos = page.locator(
      "//a[@data-test-id= `dashboard-footer-videos-link`]"
    );
    this.customerReviews = page.locator(
      "//a[@data-test-id= `dashboard-footer-customer-reviews-link`]"
    );
    this.moneyTips = page.locator(
      "//a[@data-test-id= `dashboard-footer-money-tips-link`]"
    );
    this.contactUs = page.locator(
      "//a[@data-test-id= `dashboard-footer-contact-us-link`]"
    );
    this.storeLocator = page.locator(
      "//a[@data-test-id= `dashboard-footer-store-locator-link`]"
    );
    this.siteMap = page.locator(
      "//a[@data-test-id= `dashboard-footer-site-map-link`]"
    );
    this.security = page.locator(
      "//a[@data-test-id= `dashboard-footer-security-link`]"
    );
    this.accessibility = page.locator(
      "//a[@data-test-id= `dashboard-footer-accessibility-link`]"
    );
    this.privacyTerms = page.locator(
      "//a[@data-test-id= `Privacy & Terms-link`]"
    );
    this.cookiesAdvertising = page.locator(
      "//a[@data-test-id= `Cookies & Advertising-link`]"
    );
    this.facebook = page.locator(
      "//a[@data-test-id= `dashboard-footer-facebook-social-link`]"
    );
    this.twitter = page.locator(
      "//a[@data-test-id= `dashboard-footer-twitter-social-link`]"
    );
    this.instagram = page.locator(
      "//a[@data-test-id= `dashboard-footer-instagram-social-link`]"
    );
    this.youtube = page.locator(
      "//a[@data-test-id= `dashboard-footer-you-tube-social-link`]"
    );
    this.pinterest = page.locator(
      "//a[@data-test-id= `dashboard-footer-pinterest-social-link`]"
    );
  }
}
module.exports = { DashboardPage };
