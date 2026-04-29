# Playwright UI Automation Framework

A complete, interview-ready Playwright UI automation framework using Page Object Model (POM), fixtures, .env configuration, and Allure reporting for testing https://www.automationexercise.com/

## 🚀 Features

- **Playwright** - Modern end-to-end testing framework
- **Page Object Model (POM)** - Clean, maintainable page objects
- **Custom Fixtures** - Reusable test setup and authentication
- **Environment Configuration** - .env support for flexible configuration
- **Allure Reporting** - Beautiful, interactive test reports
- **Multiple Browsers** - Chromium, Firefox, WebKit support
- **Mobile Testing** - Mobile device emulation
- **Screenshots & Videos** - Automatic capture on failure
- **Retries** - Configurable retry mechanism
- **TypeScript Ready** - Easy to migrate to TypeScript

## 📁 Project Structure
```
project/
├── tests/                  # Test files
│   └── search.spec.js      # Search functionality tests
├── pages/                  # Page Object Models
│   ├── BasePage.js         # Base page class
│   ├── HomePage.js         # Home page + HeaderFragment
│   ├── ProductsPage.js     # Products page + HeaderFragment
│   └── fragments/
│       └── HeaderFragment.js    # Navigation component
├── fixtures/               # Custom fixtures
│   └── page-fixture.js     # Page objects and auth fixtures
├── utils/                  # Utility functions
│   ├── logger.js           # Logger utility
│   └── test-data-helper.js # Test data helper
├── config/                 # Configuration files
│   └── env-config.js       # Environment configuration
├── .env                    # Environment variables
├── playwright.config.js    # Playwright configuration
├── allure.config.js        # Allure configuration
├── package.json            # Node.js dependencies
└── README.md              # This file
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd playwright-automation-framework
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Playwright browsers**
   ```bash
   npm run install:browsers
   ```

4. **Configure environment variables**
   
   Copy `.env` file and update with your credentials:
   ```env
   BASE_URL=https://www.automationexercise.com/
   USER_EMAIL=your-email@test.com
   USER_PASSWORD=yourpassword
   ```

## 🧪 Running Tests

### Run all tests
```bash
npm test
```

### Run tests with UI (headed mode)
```bash
npm run test:headed
```

### Run tests in debug mode
```bash
npm run test:debug
```

### Run specific test suite
```bash
npm test tests/search.spec.js
```

### Run single test
```bash
npx playwright test tests/search.spec.js --grep "TC018"
```

### Run tests with specific browser
```bash
npx playwright test tests/search.spec.js --project chromium
```

### Run tests with UI in specific browser
```bash
npx playwright test tests/search.spec.js --project chromium --headed
```

### Generate and view Allure report
```bash
npm run report:open
```

### Clean reports
```bash
npm run clean:reports
```

## 📊 Test Coverage

### Search Tests (`search.spec.js`)
- ✅ Search product and verify results from home page
- ✅ Search with valid product name
- ✅ Search with invalid product name
- ✅ Search with empty string
- ✅ Search with partial product name
- ✅ Search case insensitive
- ✅ Search and verify product details

## 🔧 Configuration

### Playwright Configuration (`playwright.config.js`)
- Multiple browsers (Chromium, Firefox, WebKit)
- Mobile device emulation
- Screenshots on failure
- Video recording on failure
- Retry configuration
- Allure reporting integration

### Environment Configuration (`.env`)
```env
# Website Configuration
BASE_URL=https://www.automationexercise.com/

# Test User Credentials
USER_EMAIL=test@test.com
USER_PASSWORD=123456

# Test Configuration
DEFAULT_TIMEOUT=10000
NAVIGATION_TIMEOUT=30000
```

## 📝 Writing New Tests

### 1. Create a new test file in `tests/` directory
```javascript
const { test, expect } = require('../fixtures/page-fixture');

test.describe('New Feature Tests', () => {
  test('TC025 - New test case', async ({ homePage, loginPage }) => {
    // Test implementation
    await homePage.navigateToHome();
    // ... test steps
  });
});
```

### 2. Use Page Object Models
```javascript
// Use page objects instead of raw selectors
await homePage.clickSignupLogin();
await loginPage.login(email, password);
```

### 3. Add assertions
```javascript
// Use Playwright expect assertions
await expect(loginPage.isLoggedIn()).toBeTruthy();
await expect(element).toBeVisible();
```

## 🎯 Best Practices

- ✅ Use Page Object Model pattern
- ✅ Use meaningful test names and descriptions
- ✅ Use environment variables for configuration
- ✅ Write independent tests (no dependencies between tests)
- ✅ Use stable locators (getByRole, getByText when possible)
- ✅ Avoid hardcoded waits (use auto-waiting features)
- ✅ Add proper assertions
- ✅ Use descriptive comments for complex logic
- ✅ Follow consistent naming conventions

## 📈 Reporting

### Allure Reports
- Interactive HTML reports
- Test execution timeline
- Screenshots and videos on failure
- Test categories and tags
- Detailed test information

### HTML Reports
- Built-in Playwright HTML reports
- Real-time test execution
- Detailed error messages
- Test artifacts

## 🐛 Debugging

### Debug Mode
```bash
npm run test:debug
```

### VS Code Debugging
Use the Playwright VS Code extension for enhanced debugging experience.

### Browser DevTools
Tests run in headed mode allow you to use browser developer tools for debugging.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Write tests for new functionality
4. Ensure all tests pass
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [Playwright](https://playwright.dev/) - Modern end-to-end testing
- [Allure Report](https://allurereport.org/) - Beautiful test reports
- [Automation Exercise](https://www.automationexercise.com/) - Test website

---

**Happy Testing! 🚀**
