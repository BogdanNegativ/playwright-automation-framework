const { test } = require('../fixtures/page-fixture');
const { expect } = require('@playwright/test');

test.describe('Registration Tests', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.navigateToHome();
  });

  test('TC001 - Register User', async ({ homePage, loginPage, signupPage }) => {
    // Test data
    const userData = {
      name: 'John Do',
      email: 'john.do.test@try.com',
      title: 'Mr',
      password: 'Test123456',
      day: '15',
      month: '8',
      year: '1990',
      firstName: 'John',
      lastName: 'Doe',
      company: 'Test Company',
      address: '123 Main Street',
      address2: 'Apt 4B',
      country: 'United States',
      state: 'California',
      city: 'Los Angeles',
      zipcode: '90001',
      mobileNumber: '1234567890',
      newsletter: true,
      specialOffers: true
    };

    // 1. Launch browser and navigate to URL (handled by beforeEach)
    // 2. Verify that home page is visible successfully
    await expect(homePage.isHomePageLoaded()).toBeTruthy();
    console.log('✅ Home page loaded successfully');

    // 3. Click on 'Signup / Login' button
    await homePage.clickSignupLogin();
    console.log('✅ Clicked on Signup/Login button');

    // 4. Verify 'New User Signup!' is visible
    await expect(loginPage.isNewUserSignupVisible()).toBeTruthy();
    console.log('✅ "New User Signup!" is visible');

    // 5. Enter name and email address
    await loginPage.fillSignupForm(userData.name, userData.email);
    console.log(`✅ Entered name: ${userData.name} and email: ${userData.email}`);

    // 6. Click 'Signup' button
    await loginPage.clickSignup();
    console.log('✅ Clicked Signup button');

    // 7. Verify that 'ENTER ACCOUNT INFORMATION' is visible
    await expect(signupPage.isEnterAccountInfoVisible()).toBeTruthy();
    console.log('✅ "Enter Account Information" is visible');

    // 8. Fill details: Title, Name, Email, Password, Date of birth
    await signupPage.fillAccountInformation({
      title: userData.title,
      password: userData.password,
      day: userData.day,
      month: userData.month,
      year: userData.year,
      firstName: userData.firstName,
      lastName: userData.lastName
    });
    console.log('✅ Filled account information (title, password, DOB, name)');

    // 9. Select checkbox 'Sign up for our newsletter!'
    if (userData.newsletter) {
      await signupPage.selectNewsletter();
      console.log('✅ Selected newsletter checkbox');
    }

    // 10. Select checkbox 'Receive special offers from our partners!'
    if (userData.specialOffers) {
      await signupPage.selectSpecialOffers();
      console.log('✅ Selected special offers checkbox');
    }

    // 11. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    await signupPage.fillAccountInformation({
      company: userData.company,
      address: userData.address,
      address2: userData.address2,
      country: userData.country,
      state: userData.state,
      city: userData.city,
      zipcode: userData.zipcode,
      mobileNumber: userData.mobileNumber
    });
    console.log('✅ Filled address and contact information');

    // 12. Click 'Create Account button'
    await signupPage.clickCreateAccount();
    console.log('✅ Clicked Create Account button');

    // 13. Verify that 'ACCOUNT CREATED!' is visible
    await expect(signupPage.isAccountCreatedVisible()).toBeTruthy();
    console.log('✅ "ACCOUNT CREATED!" is visible');

    // 14. Click 'Continue' button
    await signupPage.clickContinue();
    console.log('✅ Clicked Continue button');

    // 15. Verify that 'Logged in as username' is visible
    await expect(signupPage.isLoggedInAsVisible()).toBeTruthy();
    const loggedInUsername = await signupPage.getLoggedInUsername();
    console.log(`✅ "Logged in as ${loggedInUsername}" is visible`);

    // 16. Click 'Delete Account' button
    await signupPage.clickDeleteAccount();
    console.log('✅ Clicked Delete Account button');

    // 17. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
    await expect(signupPage.isAccountDeletedVisible()).toBeTruthy();
    console.log('✅ "ACCOUNT DELETED!" is visible');
    
    await signupPage.clickContinue();
    console.log('✅ Clicked Continue button after account deletion');

    // Verify we're back to home page
    await expect(homePage.isHomePageLoaded()).toBeTruthy();
    console.log('✅ Successfully returned to home page');
  });

  test('TC002 - Register User with minimum required fields', async ({ homePage, loginPage, signupPage }) => {
    // Test data with only required fields
    const userData = {
      name: 'Jane Smith',
      email: 'jane.smith.test@example.com',
      title: 'Mrs',
      password: 'Test123456',
      day: '20',
      month: '5',
      year: '1985',
      firstName: 'Jane',
      lastName: 'Smith',
      address: '456 Oak Street',
      country: 'United States',
      state: 'California',
      city: 'San Francisco',
      zipcode: '94102',
      mobileNumber: '9876543210'
    };

    // Navigate to signup
    await homePage.clickSignupLogin();
    await expect(loginPage.isNewUserSignupVisible()).toBeTruthy();

    // Fill signup form
    await loginPage.fillSignupForm(userData.name, userData.email);
    await loginPage.clickSignup();

    // Verify account info page
    await expect(signupPage.isEnterAccountInfoVisible()).toBeTruthy();

    // Fill only required fields (name, email, password, first name, last name, address, country, state, city, zipcode, mobile number)
    await signupPage.fillAccountInformation(userData);

    // Create account
    await signupPage.clickCreateAccount();
    await expect(signupPage.isAccountCreatedVisible()).toBeTruthy();

    // Continue to home
    await signupPage.clickContinue();
    await expect(signupPage.isLoggedInAsVisible()).toBeTruthy();

    // Clean up - delete account
    await signupPage.clickDeleteAccount();
    await expect(signupPage.isAccountDeletedVisible()).toBeTruthy();
    await signupPage.clickContinue();

    console.log('✅ Registration with minimum required fields completed successfully');
  });
});
