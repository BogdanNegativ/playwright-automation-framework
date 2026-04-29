const { test } = require('../fixtures/page-fixture');
const { expect } = require('@playwright/test');
const { createUserAccount, deleteUserAccount, logoutUser, generateTestUserData } = require('../utils/test-helpers');

test.describe('Registration Tests', () => {
  test.beforeEach(async ({ homePage }) => {
    await test.step('Open home page', async () => {
      await homePage.navigateToHome();
    });
  });

  test('TC001 - Register User', async ({ homePage, loginPage, signupPage }) => {
    const userData = generateTestUserData();

    await test.step('Verify home page is loaded', async () => {
      await expect(homePage.isHomePageLoaded()).toBeTruthy();
    });

    await test.step('Create user account with all fields', async () => {
      await createUserAccount(userData, { homePage, loginPage, signupPage });
    });

    await test.step('Verify user is logged in', async () => {
      await expect(signupPage.isLoggedInAsVisible()).toBeTruthy();
      const loggedInUsername = await signupPage.getLoggedInUsername();
      expect(loggedInUsername).toBe(userData.name);
    });

    await test.step('Delete user account', async () => {
      await deleteUserAccount({ signupPage });
    });

    await test.step('Verify user is returned to home page', async () => {
      await expect(homePage.isHomePageLoaded()).toBeTruthy();
    });
  });

  test('TC002 - Login User with correct email and password', async ({ homePage, loginPage, signupPage }) => {
    const userData = generateTestUserData();

    await test.step('Create test user account', async () => {
      await createUserAccount(userData, { homePage, loginPage, signupPage });
    });

    await test.step('Logout from created account', async () => {
      await logoutUser({ homePage, signupPage });
    });

    await test.step('Navigate to login page', async () => {
      await homePage.clickSignupLogin();
    });

    await test.step('Verify login form is displayed', async () => {
      await expect(loginPage.isLoginToAccountVisible()).toBeTruthy();
    });

    await test.step('Enter login credentials', async () => {
      await loginPage.fillLoginForm(userData.email, userData.password);
    });

    await test.step('Click login button', async () => {
      await loginPage.clickLogin();
    });

    await test.step('Verify user is successfully logged in', async () => {
      await expect(signupPage.isLoggedInAsVisible()).toBeTruthy();
      const loggedInUsername = await signupPage.getLoggedInUsername();
      expect(loggedInUsername).toBe(userData.name);
    });

    await test.step('Delete user account', async () => {
      await deleteUserAccount({ signupPage });
    });

    await test.step('Verify user is returned to home page', async () => {
      await expect(homePage.isHomePageLoaded()).toBeTruthy();
    });
  });
});
