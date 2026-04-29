/**
 * Simple logger utility for test automation
 */
class Logger {
  constructor() {
    this.logLevel = process.env.LOG_LEVEL || 'info';
    this.levels = {
      error: 0,
      warn: 1,
      info: 2,
      debug: 3
    };
  }

  /**
   * Log error message
   * @param {string} message - Error message
   * @param {Object} data - Additional data to log
   */
  error(message, data = null) {
    if (this.levels.error <= this.levels[this.logLevel]) {
      console.error(`[ERROR] ${new Date().toISOString()} - ${message}`);
      if (data) {
        console.error(JSON.stringify(data, null, 2));
      }
    }
  }

  /**
   * Log warning message
   * @param {string} message - Warning message
   * @param {Object} data - Additional data to log
   */
  warn(message, data = null) {
    if (this.levels.warn <= this.levels[this.logLevel]) {
      console.warn(`[WARN] ${new Date().toISOString()} - ${message}`);
      if (data) {
        console.warn(JSON.stringify(data, null, 2));
      }
    }
  }

  /**
   * Log info message
   * @param {string} message - Info message
   * @param {Object} data - Additional data to log
   */
  info(message, data = null) {
    if (this.levels.info <= this.levels[this.logLevel]) {
      console.log(`[INFO] ${new Date().toISOString()} - ${message}`);
      if (data) {
        console.log(JSON.stringify(data, null, 2));
      }
    }
  }

  /**
   * Log debug message
   * @param {string} message - Debug message
   * @param {Object} data - Additional data to log
   */
  debug(message, data = null) {
    if (this.levels.debug <= this.levels[this.logLevel]) {
      console.log(`[DEBUG] ${new Date().toISOString()} - ${message}`);
      if (data) {
        console.log(JSON.stringify(data, null, 2));
      }
    }
  }

  /**
   * Log test start
   * @param {string} testName - Test name
   */
  testStart(testName) {
    this.info(`Starting test: ${testName}`);
  }

  /**
   * Log test end
   * @param {string} testName - Test name
   * @param {string} status - Test status (passed/failed)
   */
  testEnd(testName, status) {
    this.info(`Test completed: ${testName} - Status: ${status}`);
  }

  /**
   * Log step
   * @param {string} stepDescription - Step description
   */
  step(stepDescription) {
    this.info(`Step: ${stepDescription}`);
  }

  /**
   * Log assertion
   * @param {string} assertion - Assertion description
   * @param {boolean} result - Assertion result
   */
  assertion(assertion, result) {
    if (result) {
      this.debug(`Assertion passed: ${assertion}`);
    } else {
      this.error(`Assertion failed: ${assertion}`);
    }
  }
}

module.exports = new Logger();
