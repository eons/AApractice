class PaymentFrequencyPage {
  constructor(page) {
    this.weeklyRadioButton = page.locator("#paymentFrequency-0");
    this.biWeeklyRadioButton = page.locator("#paymentFrequency-1");
    this.twiceAMonthRadioButton = page.locator("#paymentFrequency-2");
    this.monthlyRadioButton = page.locator("#paymentFrequency-3");
    this.exitModal = page.locator("//a[@data-bs-target= 'exitModal']");
    this.nextButton = page.locator(
      "//a[data-testid = 'formPaymentFrequency-submit-button']"
    );
  }
}
module.exports = { PaymentFrequencyPage };
