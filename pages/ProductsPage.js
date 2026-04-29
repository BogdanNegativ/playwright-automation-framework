const BasePage = require('./BasePage');
const HeaderFragment = require('./fragments/HeaderFragment');

/**
 * Products Page Object Model
 */
class ProductsPage extends BasePage {
  constructor(page) {
    super(page);
    
    // Initialize fragments
    this.header = new HeaderFragment(page);
    
    // Locators
    this.productsHeading = this.page.getByText('All Products');
    this.productList = this.page.locator('.features_items .product-image-wrapper');
    this.productItems = this.page.locator('.productinfo');
    this.addToCartButtons = this.page.locator('.add-to-cart');
    this.viewProductButtons = this.page.locator('.choose > .nav-pills > li > a');
    this.searchInput = this.page.locator('#search_product');
    this.searchButton = this.page.locator('button[type="submit"]');
    this.categoryList = this.page.locator('.panel-group .panel-title');
    this.categoryItems = this.page.locator('.panel-body > ul > li > a');
    this.brandsList = this.page.locator('.brands-name .nav-pills > li > a');
    this.sortDropdown = this.page.locator('#sort');
    this.productName = this.page.locator('.productinfo p');
    this.productPrice = this.page.locator('.productinfo h2');
    this.searchResultsHeading = this.page.getByText('Searched Products');
    this.noResultsMessage = this.page.getByText('No Products Found');
  }

  /**
   * Navigate to products page
   */
  async navigateToProducts() {
    await this.navigate('/products');
  }

  /**
   * Search for products
   * @param {string} searchTerm - Search term
   */
  async searchProducts(searchTerm) {
    // Wait for search input to be available
    await this.searchInput.waitFor({ state: 'visible', timeout: 10000 });
    
    // Clear and fill search input
    await this.searchInput.clear();
    await this.searchInput.fill(searchTerm);
    
    // Click search button
    await this.searchButton.click();
    
    // Wait for search to process
    await this.page.waitForTimeout(2000);
  }

  /**
   * Check if products page is loaded
   * @returns {boolean} True if products page is loaded
   */
  async isProductsPageLoaded() {
    return await this.productsHeading.isVisible();
  }

  /**
   * Check if products are visible
   * @returns {boolean} True if products are displayed
   */
  async areProductsVisible() {
    try {
      const count = await this.productItems.count();
      return count > 0;
    } catch (error) {
      return false;
    }
  }

  /**
   * Get product count
   * @returns {number} Number of products displayed
   */
  async getProductCount() {
    return await this.productItems.count();
  }

  /**
   * Check if search results are displayed
   * @returns {boolean} True if search results heading is visible
   */
  async areSearchResultsDisplayed() {
    return await this.searchResultsHeading.isVisible();
  }

  /**
   * Check if no results message is displayed
   * @returns {boolean} True if no results message is visible
   */
  async isNoResultsMessageDisplayed() {
    return await this.noResultsMessage.isVisible();
  }

  /**
   * Add product to cart
   * @param {number} index - Product index
   */
  async addProductToCart(index = 0) {
    await this.addToCartButtons.nth(index).click();
  }

  /**
   * View product details
   * @param {number} index - Product index
   */
  async viewProductDetails(index = 0) {
    await this.viewProductButtons.nth(index).click();
  }

  /**
   * Filter by category
   * @param {string} category - Category name
   */
  async filterByCategory(category) {
    await this.categoryList.filter({ hasText: category }).first().click();
  }

  /**
   * Filter by brand
   * @param {string} brand - Brand name
   */
  async filterByBrand(brand) {
    await this.brandsList.filter({ hasText: brand }).first().click();
  }

  /**
   * Sort products
   * @param {string} sortBy - Sort option
   */
  async sortProducts(sortBy) {
    await this.sortDropdown.selectOption(sortBy);
  }

  /**
   * Check if product contains search term
   * @param {string} searchTerm - Search term to check
   * @returns {boolean} True if any product contains the search term
   */
  async hasProductWithSearchTerm(searchTerm) {
    const productTexts = await this.productItems.allTextContents();
    return productTexts.some(text => 
      text.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  /**
   * Get first product name
   * @returns {string} First product name
   */
  async getFirstProductName() {
    return await this.productName.first().textContent();
  }

  /**
   * Get page title
   * @returns {string} Page title
   */
  async getPageTitle() {
    return await this.getTitle();
  }
}

module.exports = ProductsPage;
