/**
 * Base Page class that contains common functionality for all page objects
 */
class BasePage {
  constructor(page) {
    this.page = page;
  }

  /**
   * Navigate to a specific URL
   * @param {string} path - Path to navigate to
   */
  async navigate(path = '') {
    await this.page.goto(path);
  }

  /**
   * Wait for element to be visible
   * @param {string} selector - Element selector
   */
  async waitForElement(selector) {
    await this.page.waitForSelector(selector, { state: 'visible' });
  }

  /**
   * Click on an element
   * @param {string} selector - Element selector
   */
  async click(selector) {
    await this.page.click(selector);
  }

  /**
   * Type text into an input field
   * @param {string} selector - Input field selector
   * @param {string} text - Text to type
   */
  async type(selector, text) {
    await this.page.fill(selector, text);
  }

  /**
   * Get text content of an element
   * @param {string} selector - Element selector
   * @returns {string} Text content
   */
  async getText(selector) {
    return await this.page.textContent(selector);
  }

  /**
   * Check if element is visible
   * @param {string} selector - Element selector
   * @returns {boolean} True if visible
   */
  async isVisible(selector) {
    return await this.page.isVisible(selector);
  }

  /**
   * Wait for page to load completely
   */
  async waitForPageLoad() {
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Take screenshot
   * @param {string} name - Screenshot name
   */
  async takeScreenshot(name) {
    await this.page.screenshot({ path: `screenshots/${name}.png` });
  }

  /**
   * Get page title
   * @returns {string} Page title
   */
  async getTitle() {
    return await this.page.title();
  }
}

module.exports = BasePage;
