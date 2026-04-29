const EnvConfig = require('../config/env-config');

/**
 * Test data helper utility
 */
class TestDataHelper {
  /**
   * Generate unique email for testing
   * @param {string} prefix - Email prefix
   * @returns {string} Unique email address
   */
  static generateUniqueEmail(prefix = 'testuser') {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000);
    return `${prefix}${timestamp}${random}@test.com`;
  }

  /**
   * Generate unique name for testing
   * @param {string} prefix - Name prefix
   * @returns {string} Unique name
   */
  static generateUniqueName(prefix = 'Test') {
    const timestamp = Date.now();
    return `${prefix} User ${timestamp}`;
  }

  /**
   * Get invalid user credentials for negative testing
   * @returns {Object} Invalid user credentials
   */
  static getInvalidUserCredentials() {
    return {
      email: 'invalid@test.com',
      password: 'invalidpassword'
    };
  }

  /**
   * Get search terms for testing
   * @returns {Array<string>} Array of search terms
   */
  static getSearchTerms() {
    return [
      'dress',
      'top',
      'jeans',
      'shirt',
      'pants',
      'skirt',
      'jacket',
      'blouse'
    ];
  }

  /**
   * Get invalid search terms for negative testing
   * @returns {Array<string>} Array of invalid search terms
   */
  static getInvalidSearchTerms() {
    return [
      'nonexistentproduct12345',
      'xyzabc123',
      'invalidsearchterm',
      '',
      '   '
    ];
  }
}

module.exports = { TestDataHelper };
