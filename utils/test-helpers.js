const { expect } = require("@playwright/test");
const { TestDataHelper } = require("./test-data-helper");

/**
 * Common test utilities for user account management
 * These methods can be reused across multiple test files
 */

/**
 * Helper method to create a user account
 * @param {Object} userData - User data object
 * @param {Object} pages - Page objects (homePage, loginPage, signupPage)
 */
async function createUserAccount(
  userData,
  { homePage, loginPage, signupPage },
) {
  console.log("🔧 Creating test user account...");
  await homePage.clickSignupLogin();
  await expect(loginPage.isNewUserSignupVisible()).toBeTruthy();

  await loginPage.fillSignupForm(userData.name, userData.email);
  await loginPage.clickSignup();

  await expect(signupPage.isEnterAccountInfoVisible()).toBeTruthy();
  await signupPage.fillAccountInformation(userData);
  await signupPage.clickCreateAccount();

  await expect(signupPage.isAccountCreatedVisible()).toBeTruthy();
  await signupPage.clickContinue();

  console.log("✅ User account created successfully");
}

/**
 * Helper method to delete user account
 * @param {Object} pages - Page objects (signupPage)
 */
async function deleteUserAccount({ signupPage }) {
  await signupPage.clickDeleteAccount();
  await expect(signupPage.isAccountDeletedVisible()).toBeTruthy();
  await signupPage.clickContinue();
  console.log("✅ User account deleted successfully");
}

/**
 * Helper method to logout user
 * @param {Object} pages - Page objects (homePage, signupPage)
 */
async function logoutUser({ homePage, signupPage }) {
  // Use header fragment through the proper POM structure
  await homePage.header.logout();
  console.log("✅ User logged out successfully");
}

/**
 * Helper method to generate test user data
 * Uses TestDataHelper for unique email/name generation
 * @param {Object} overrides - Object with properties to override defaults
 * @returns {Object} Complete user data object
 */
function generateTestUserData(overrides = {}) {
  const defaultData = {
    name: TestDataHelper.generateUniqueName("Test"),
    email: TestDataHelper.generateUniqueEmail("test.user"),
    title: "Mr",
    password: "Test123456",
    day: "15",
    month: "8",
    year: "1990",
    firstName: "Test",
    lastName: "User",
    company: "Test Company",
    address: "123 Test Street",
    address2: "Apt 1",
    country: "United States",
    state: "California",
    city: "Los Angeles",
    zipcode: "90001",
    mobileNumber: "1234567890",
    newsletter: true,
    specialOffers: true,
  };

  return { ...defaultData, ...overrides };
}

module.exports = {
  createUserAccount,
  deleteUserAccount,
  logoutUser,
  generateTestUserData,
};
