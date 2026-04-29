const { test: base } = require("@playwright/test");
const HomePage = require("../pages/HomePage");
const ProductsPage = require("../pages/ProductsPage");
const LoginPage = require("../pages/LoginPage");
const SignupPage = require("../pages/SignupPage");
const EnvConfig = require("../config/env-config");

// Create custom test fixture with page objects
const test = base.extend({
  page: async ({ page }, use) => {
    // Block ads at network level
    page.route('**/*', (route) => {
      const url = route.request().url();
      const blocked = [
        "doubleclick.net",
        "pagead2.googlesyndication.com", 
        "googlesyndication.com",
        "googleads.g.doubleclick.net",
        "adservice.google.com"
      ];
      if (blocked.some(domain => url.includes(domain))) {
        return route.abort();
      } else {
        return route.continue();
      }
    });

    // Remove ads at DOM level after page loads
    await page.addInitScript(() => {
      // Function to remove ads
      const removeAds = () => {
        // Remove common ad selectors
        const adSelectors = [
          'iframe[id^="google_ads"]',
          'iframe[id^="aswift"]',
          'iframe[src*="doubleclick"]',
          'div[id*="ad"]',
          '.ads',
          '.advertisement',
          '[id*="google"]'
        ];
        
        adSelectors.forEach(selector => {
          try {
            document.querySelectorAll(selector).forEach(el => el.remove());
          } catch (e) {
            // Ignore errors
          }
        });
      };

      // Remove ads immediately
      removeAds();

      // Set up MutationObserver to catch dynamically loaded ads
      const observer = new MutationObserver((mutations) => {
        removeAds();
      });

      // Start observing
      observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true
      });

      // Also check periodically
      setInterval(removeAds, 500);
    });
    
    await use(page);
  },
  // Page objects
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },

  productsPage: async ({ page }, use) => {
    const productsPage = new ProductsPage(page);
    await use(productsPage);
  },

  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  signupPage: async ({ page }, use) => {
    const signupPage = new SignupPage(page);
    await use(signupPage);
  },

  // Base setup fixture
  setupPage: async ({ page }, use) => {
    // Set default timeouts
    page.setDefaultTimeout(EnvConfig.getDefaultTimeout());

    // Handle uncaught exceptions
    page.on("pageerror", (error) => {
      console.error("Page error:", error);
    });

    // Handle console errors
    page.on("console", (msg) => {
      if (msg.type() === "error") {
        console.error("Console error:", msg.text());
      }
    });

    await use(page);
  },
});

module.exports = { test };
