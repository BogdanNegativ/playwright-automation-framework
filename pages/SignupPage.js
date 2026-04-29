const BasePage = require('./BasePage');

class SignupPage extends BasePage {
  constructor(page) {
    super(page);
    // Locators for signup/account information page
    this.enterAccountInfoText = this.page.locator('h2:has-text("Enter Account Information")');
    this.titleMr = this.page.locator('input#id_gender1');
    this.titleMrs = this.page.locator('input#id_gender2');
    this.passwordInput = this.page.locator('input#password');
    this.daysSelect = this.page.locator('select#days');
    this.monthsSelect = this.page.locator('select#months');
    this.yearsSelect = this.page.locator('select#years');
    this.newsletterCheckbox = this.page.locator('input#newsletter');
    this.specialOffersCheckbox = this.page.locator('input#optin');
    this.firstNameInput = this.page.locator('input#first_name');
    this.lastNameInput = this.page.locator('input#last_name');
    this.companyInput = this.page.locator('input#company');
    this.address1Input = this.page.locator('input#address1');
    this.address2Input = this.page.locator('input#address2');
    this.countrySelect = this.page.locator('select#country');
    this.stateInput = this.page.locator('input#state');
    this.cityInput = this.page.locator('input#city');
    this.zipcodeInput = this.page.locator('input#zipcode');
    this.mobileNumberInput = this.page.locator('input#mobile_number');
    this.createAccountButton = this.page.locator('button[data-qa="create-account"]');
    this.accountCreatedText = this.page.locator('h2:has-text("Account Created!")');
    this.continueButton = this.page.locator('a[data-qa="continue-button"]');
    this.loggedAsText = this.page.locator('a:has-text("Logged in as")');
    this.deleteAccountButton = this.page.locator('a:has-text("Delete Account")');
    this.accountDeletedText = this.page.locator('h2:has-text("Account Deleted!")');
  }

  /**
   * Verify "Enter Account Information" is visible
   * @returns {boolean} True if account info text is visible
   */
  async isEnterAccountInfoVisible() {
    return await this.enterAccountInfoText.isVisible();
  }

  /**
   * Select title (Mr/Mrs)
   * @param {string} title - 'Mr' or 'Mrs'
   */
  async selectTitle(title) {
    if (title.toLowerCase() === 'mr') {
      await this.titleMr.check();
    } else if (title.toLowerCase() === 'mrs') {
      await this.titleMrs.check();
    }
  }

  /**
   * Fill password
   * @param {string} password - Password
   */
  async fillPassword(password) {
    await this.passwordInput.fill(password);
  }

  /**
   * Select date of birth
   * @param {string} day - Day (1-31)
   * @param {string} month - Month (1-12)
   * @param {string} year - Year
   */
  async selectDateOfBirth(day, month, year) {
    await this.daysSelect.selectOption(day);
    await this.monthsSelect.selectOption(month);
    await this.yearsSelect.selectOption(year);
  }

  /**
   * Select newsletter checkbox
   */
  async selectNewsletter() {
    await this.newsletterCheckbox.check();
  }

  /**
   * Select special offers checkbox
   */
  async selectSpecialOffers() {
    await this.specialOffersCheckbox.check();
  }

  /**
   * Fill first name
   * @param {string} firstName - First name
   */
  async fillFirstName(firstName) {
    await this.firstNameInput.fill(firstName);
  }

  /**
   * Fill last name
   * @param {string} lastName - Last name
   */
  async fillLastName(lastName) {
    await this.lastNameInput.fill(lastName);
  }

  /**
   * Fill company
   * @param {string} company - Company name
   */
  async fillCompany(company) {
    await this.companyInput.fill(company);
  }

  /**
   * Fill address
   * @param {string} address - Address line 1
   */
  async fillAddress(address) {
    await this.address1Input.fill(address);
  }

  /**
   * Fill address line 2
   * @param {string} address2 - Address line 2
   */
  async fillAddress2(address2) {
    await this.address2Input.fill(address2);
  }

  /**
   * Select country
   * @param {string} country - Country name or value
   */
  async selectCountry(country) {
    await this.countrySelect.selectOption(country);
  }

  /**
   * Fill state
   * @param {string} state - State
   */
  async fillState(state) {
    await this.stateInput.fill(state);
  }

  /**
   * Fill city
   * @param {string} city - City
   */
  async fillCity(city) {
    await this.cityInput.fill(city);
  }

  /**
   * Fill zipcode
   * @param {string} zipcode - Zipcode
   */
  async fillZipcode(zipcode) {
    await this.zipcodeInput.fill(zipcode);
  }

  /**
   * Fill mobile number
   * @param {string} mobileNumber - Mobile number
   */
  async fillMobileNumber(mobileNumber) {
    await this.mobileNumberInput.fill(mobileNumber);
  }

  /**
   * Fill all account information
   * @param {Object} userData - User data object
   */
  async fillAccountInformation(userData) {
    // Title
    if (userData.title) {
      await this.selectTitle(userData.title);
    }

    // Password
    if (userData.password) {
      await this.fillPassword(userData.password);
    }

    // Date of birth
    if (userData.day && userData.month && userData.year) {
      await this.selectDateOfBirth(userData.day, userData.month, userData.year);
    }

    // Checkboxes
    if (userData.newsletter) {
      await this.selectNewsletter();
    }
    if (userData.specialOffers) {
      await this.selectSpecialOffers();
    }

    // Personal information
    if (userData.firstName) {
      await this.fillFirstName(userData.firstName);
    }
    if (userData.lastName) {
      await this.fillLastName(userData.lastName);
    }
    if (userData.company) {
      await this.fillCompany(userData.company);
    }

    // Address information
    if (userData.address) {
      await this.fillAddress(userData.address);
    }
    if (userData.address2) {
      await this.fillAddress2(userData.address2);
    }
    if (userData.country) {
      await this.selectCountry(userData.country);
    }
    if (userData.state) {
      await this.fillState(userData.state);
    }
    if (userData.city) {
      await this.fillCity(userData.city);
    }
    if (userData.zipcode) {
      await this.fillZipcode(userData.zipcode);
    }
    if (userData.mobileNumber) {
      await this.fillMobileNumber(userData.mobileNumber);
    }
  }

  /**
   * Click create account button
   */
  async clickCreateAccount() {
    await this.createAccountButton.click();
  }

  /**
   * Verify "Account Created!" is visible
   * @returns {boolean} True if account created text is visible
   */
  async isAccountCreatedVisible() {
    return await this.accountCreatedText.isVisible();
  }

  /**
   * Click continue button after account creation
   */
  async clickContinue() {
    await this.continueButton.click();
  }

  /**
   * Verify "Logged in as username" is visible
   * @returns {boolean} True if logged in text is visible
   */
  async isLoggedInAsVisible() {
    return await this.loggedAsText.isVisible();
  }

  /**
   * Get logged in username text
   * @returns {string} Logged in username
   */
  async getLoggedInUsername() {
    const text = await this.loggedAsText.textContent();
    return text ? text.replace(' Logged in as ', '') : '';
  }

  /**
   * Click delete account button
   */
  async clickDeleteAccount() {
    await this.deleteAccountButton.click();
  }

  /**
   * Verify "Account Deleted!" is visible
   * @returns {boolean} True if account deleted text is visible
   */
  async isAccountDeletedVisible() {
    return await this.accountDeletedText.isVisible();
  }

  /**
   * Complete account creation process
   * @param {Object} userData - User data object
   */
  async createAccount(userData) {
    await this.fillAccountInformation(userData);
    await this.clickCreateAccount();
  }
}

module.exports = SignupPage;
