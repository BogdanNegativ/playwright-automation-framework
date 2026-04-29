require('dotenv').config();

/**
 * Configuration utility for environment variables
 */
class EnvConfig {
  /**
   * Get base URL from environment
   * @returns {string} Base URL
   */
  static getBaseUrl() {
    return process.env.BASE_URL || 'https://www.automationexercise.com/';
  }

  /**
   * Get user email from environment
   * @returns {string} User email
   */
  static getUserEmail() {
    return process.env.USER_EMAIL || 'test@test.com';
  }

  /**
   * Get user password from environment
   * @returns {string} User password
   */
  static getUserPassword() {
    return process.env.USER_PASSWORD || '123456';
  }

  /**
   * Get default timeout from environment
   * @returns {number} Default timeout in milliseconds
   */
  static getDefaultTimeout() {
    return parseInt(process.env.DEFAULT_TIMEOUT) || 10000;
  }

  /**
   * Get navigation timeout from environment
   * @returns {number} Navigation timeout in milliseconds
   */
  static getNavigationTimeout() {
    return parseInt(process.env.NAVIGATION_TIMEOUT) || 30000;
  }
}

module.exports = EnvConfig;
