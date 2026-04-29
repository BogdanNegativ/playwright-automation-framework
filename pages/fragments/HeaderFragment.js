const BasePage = require('../BasePage');

/**
 * Header Fragment - Contains navigation and user account functionality
 */
class HeaderFragment extends BasePage {
  constructor(page) {
    super(page);
    
    // Navigation elements
    this.homeButton = this.page.getByRole('link', { name: 'Home' });
    this.productsButton = this.page.getByRole('link', { name: 'Products' });
    this.cartButton = this.page.getByRole('link', { name: 'Cart' });
    this.signupLoginButton = this.page.getByRole('link', { name: 'Signup / Login' });
    this.testCasesButton = this.page.getByRole('link', { name: 'Test Cases' });
    this.apiTestingButton = this.page.getByRole('link', { name: 'API Testing' });
    this.videoTutorialsButton = this.page.getByRole('link', { name: 'Video Tutorials' });
    this.contactUsButton = this.page.getByRole('link', { name: 'Contact us' });
    
    // User account elements
    this.logoutButton = this.page.getByRole('link', { name: 'Logout' });
    this.deleteAccountButton = this.page.getByRole('link', { name: 'Delete Account' });
    this.loggedInUserText = this.page.locator('li:has-text("Logged in as")');
  }

  /**
   * Navigate to home page
   */
  async clickHome() {
    await this.homeButton.click();
  }

  /**
   * Navigate to products page
   */
  async clickProducts() {
    await this.productsButton.click();
  }

  /**
   * Navigate to cart page
   */
  async clickCart() {
    await this.cartButton.click();
  }

  /**
   * Navigate to signup/login page
   */
  async clickSignupLogin() {
    await this.signupLoginButton.click();
  }

  /**
   * Navigate to test cases page
   */
  async clickTestCases() {
    await this.testCasesButton.click();
  }

  /**
   * Navigate to API testing page
   */
  async clickApiTesting() {
    await this.apiTestingButton.click();
  }

  /**
   * Navigate to video tutorials page
   */
  async clickVideoTutorials() {
    await this.videoTutorialsButton.click();
  }

  /**
   * Navigate to contact us page
   */
  async clickContactUs() {
    await this.contactUsButton.click();
  }

  /**
   * Logout user
   */
  async logout() {
    await this.logoutButton.click();
  }

  /**
   * Delete account
   */
  async deleteAccount() {
    await this.deleteAccountButton.click();
  }

  /**
   * Check if user is logged in
   * @returns {boolean} True if user is logged in
   */
  async isLoggedIn() {
    return await this.loggedInUserText.isVisible();
  }

  /**
   * Get logged in user text
   * @returns {string} Logged in user message
   */
  async getLoggedInUserText() {
    return await this.loggedInUserText.textContent();
  }

  /**
   * Check if logout button is visible
   * @returns {boolean} True if logout button is visible
   */
  async isLogoutVisible() {
    return await this.logoutButton.isVisible();
  }

  /**
   * Check if signup/login button is visible
   * @returns {boolean} True if signup/login button is visible
   */
  async isSignupLoginVisible() {
    return await this.signupLoginButton.isVisible();
  }
}

module.exports = HeaderFragment;
