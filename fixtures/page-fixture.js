const { test: base } = require('@playwright/test');
const HomePage = require('../pages/HomePage');
const ProductsPage = require('../pages/ProductsPage');
const EnvConfig = require('../config/env-config');

// Create custom test fixture with page objects
const test = base.extend({
  // Page objects
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },

  productsPage: async ({ page }, use) => {
    const productsPage = new ProductsPage(page);
    await use(productsPage);
  },

  // Base setup fixture
  setupPage: async ({ page }, use) => {
    // Set default timeouts
    page.setDefaultTimeout(EnvConfig.getDefaultTimeout());
    
    // Handle uncaught exceptions
    page.on('pageerror', (error) => {
      console.error('Page error:', error);
    });

    // Handle console errors
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        console.error('Console error:', msg.text());
      }
    });

    await use(page);
  }
});

module.exports = { test };
