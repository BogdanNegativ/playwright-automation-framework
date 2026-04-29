const BasePage = require('./BasePage');

class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    // Locators for login/signup page
    this.signupNameInput = this.page.locator('input[data-qa="signup-name"]');
    this.signupEmailInput = this.page.locator('input[data-qa="signup-email"]');
    this.signupButton = this.page.locator('button[data-qa="signup-button"]');
    this.loginEmailInput = this.page.locator('input[data-qa="login-email"]');
    this.loginPasswordInput = this.page.locator('input[data-qa="login-password"]');
    this.loginButton = this.page.locator('button[data-qa="login-button"]');
    this.newUserSignupText = this.page.locator('h2:has-text("New User Signup!")');
    this.loginToAccountText = this.page.locator('h2:has-text("Login to your account")');
    this.errorMessage = this.page.locator('p:has-text("Your email or password is incorrect!")');
  }

  /**
   * Verify new user signup is visible
   * @returns {boolean} True if signup form is visible
   */
  async isNewUserSignupVisible() {
    return await this.newUserSignupText.isVisible();
  }

  /**
   * Verify login to account is visible
   * @returns {boolean} True if login form is visible
   */
  async isLoginToAccountVisible() {
    return await this.loginToAccountText.isVisible();
  }

  /**
   * Fill signup form
   * @param {string} name - User name
   * @param {string} email - User email
   */
  async fillSignupForm(name, email) {
    await this.signupNameInput.fill(name);
    await this.signupEmailInput.fill(email);
  }

  /**
   * Click signup button
   */
  async clickSignup() {
    await this.signupButton.click();
  }

  /**
   * Fill login form
   * @param {string} email - User email
   * @param {string} password - User password
   */
  async fillLoginForm(email, password) {
    await this.loginEmailInput.fill(email);
    await this.loginPasswordInput.fill(password);
  }

  /**
   * Click login button
   */
  async clickLogin() {
    await this.loginButton.click();
  }

  /**
   * Complete signup process
   * @param {string} name - User name
   * @param {string} email - User email
   */
  async signup(name, email) {
    await this.fillSignupForm(name, email);
    await this.clickSignup();
  }

  /**
   * Complete login process
   * @param {string} email - User email
   * @param {string} password - User password
   */
  async login(email, password) {
    await this.fillLoginForm(email, password);
    await this.clickLogin();
  }

  /**
   * Get error message text
   * @returns {string} Error message
   */
  async getErrorMessage() {
    return await this.errorMessage.textContent();
  }

  /**
   * Check if error message is visible
   * @returns {boolean} True if error message is visible
   */
  async isErrorMessageVisible() {
    return await this.errorMessage.isVisible();
  }
}

module.exports = LoginPage;
