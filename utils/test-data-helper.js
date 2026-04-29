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
   * Get test user credentials
   * @returns {Object} Test user credentials
   */
  static getTestUserCredentials() {
    return {
      email: EnvConfig.getUserEmail(),
      password: EnvConfig.getUserPassword()
    };
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
   * Get sample user registration data
   * @param {Object} overrides - Override properties
   * @returns {Object} Sample user registration data
   */
  static getSampleUserData(overrides = {}) {
    const defaultData = {
      title: 'Mr',
      password: 'Test123456',
      day: '15',
      month: 'August',
      year: '1990',
      newsletter: true,
      optin: true,
      firstName: 'Test',
      lastName: 'User',
      company: 'Test Company',
      address1: '123 Test Street',
      address2: 'Apt 4B',
      state: 'California',
      city: 'Los Angeles',
      zipcode: '90001',
      mobileNumber: '1234567890'
    };

    return { ...defaultData, ...overrides };
  }

  /**
   * Get sample payment details
   * @param {Object} overrides - Override properties
   * @returns {Object} Sample payment details
   */
  static getSamplePaymentDetails(overrides = {}) {
    const defaultDetails = {
      nameOnCard: 'Test User',
      cardNumber: '4111111111111111',
      cvc: '123',
      expiryMonth: '12',
      expiryYear: '2025'
    };

    return { ...defaultDetails, ...overrides };
  }

  /**
   * Get sample review data
   * @param {Object} overrides - Override properties
   * @returns {Object} Sample review data
   */
  static getSampleReviewData(overrides = {}) {
    const defaultReview = {
      name: 'Test Reviewer',
      email: 'reviewer@test.com',
      review: 'This is a great product! Highly recommended.'
    };

    return { ...defaultReview, ...overrides };
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

  /**
   * Generate random string
   * @param {number} length - String length
   * @returns {string} Random string
   */
  static generateRandomString(length = 10) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  /**
   * Generate random number
   * @param {number} min - Minimum value
   * @param {number} max - Maximum value
   * @returns {number} Random number
   */
  static generateRandomNumber(min = 1, max = 100) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

module.exports = TestDataHelper;
