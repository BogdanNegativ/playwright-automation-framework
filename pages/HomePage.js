const BasePage = require('./BasePage');
const HeaderFragment = require('./fragments/HeaderFragment');

/**
 * Home Page Object Model
 */
class HomePage extends BasePage {
  constructor(page) {
    super(page);
    
    // Initialize fragments
    this.header = new HeaderFragment(page);
    
    // Home page specific locators
    this.logo = this.page.getByRole('link', { name: 'Automation Exercise' });
    this.subscriptionHeading = this.page.getByText('Subscription');
    this.subscriptionEmail = this.page.getByPlaceholder('Your email address');
    this.subscribeButton = this.page.getByRole('button', { name: 'Subscribe' });
    this.successMessage = this.page.getByText('Success! You have been subscribed');
    this.sliderSection = this.page.locator('#slider');
    this.featuresItems = this.page.locator('.features_items');
    this.categoryList = this.page.locator('.panel-group');
    this.brandsList = this.page.locator('.brands_products');
  }

  /**
   * Navigate to home page
   */
  async navigateToHome() {
    await this.navigate();
  }

  /**
   * Click on Signup/Login button (delegated to header fragment)
   */
  async clickSignupLogin() {
    await this.header.clickSignupLogin();
  }

  /**
   * Click on Products button (delegated to header fragment)
   */
  async clickProducts() {
    await this.header.clickProducts();
  }

  /**
   * Click on Cart button (delegated to header fragment)
   */
  async clickCart() {
    await this.header.clickCart();
  }

  
  /**
   * Subscribe to newsletter
   * @param {string} email - Email address to subscribe
   */
  async subscribe(email) {
    await this.subscriptionEmail.fill(email);
    await this.subscribeButton.click();
  }

  /**
   * Verify home page is loaded
   * @returns {boolean} True if home page is loaded
   */
  async isHomePageLoaded() {
    return await this.logo.isVisible() && await this.sliderSection.isVisible();
  }

  /**
   * Verify success message is displayed
   * @returns {boolean} True if success message is visible
   */
  async isSuccessMessageDisplayed() {
    return await this.successMessage.isVisible();
  }

  /**
   * Get page title
   * @returns {string} Page title
   */
  async getPageTitle() {
    return await this.getTitle();
  }
}

module.exports = HomePage;
