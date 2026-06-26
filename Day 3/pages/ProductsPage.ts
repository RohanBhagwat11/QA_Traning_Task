import { Page, Locator, expect } from "@playwright/test";
import { routes } from "../Constants/routes";
import { products } from "../test-data/product";

export class ProductsPage {
  readonly page: Page;
  readonly inventoryList: Locator;
  readonly cartBadge: Locator;
  readonly cartLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inventoryList = page.locator(".inventory_item");
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
    this.cartLink = page.locator('[data-test="shopping-cart-link"]');
  }

  async verifyProductsPageIsVisible(): Promise<void> {
    await expect(this.page).toHaveURL(routes.Product);
    await expect(this.inventoryList).toHaveCount(6);
  }

  async addProductToCart(productName: string): Promise<void> {
    const productId = productName.toLowerCase().replaceAll(" ", "-");
    await this.page.locator(`[data-test="add-to-cart-${productId}"]`).click();
  }

  async addSingleProduct(): Promise<void> {
    await this.addProductToCart(products[0].name);
    await this.verifyCartCount(products[0].expectedCartCount);
  }

  async addMultipleProduct(): Promise<void> {
    for (const product of products) {
      await this.addProductToCart(product.name);
    }

    await this.verifyCartCount(products.length);
  }

  async removeProductFromCart(productName: string): Promise<void> {
    await this.inventoryList
      .filter({ hasText: productName })
      .getByRole("button", { name: "Remove" })
      .click();
  }

  async removeSingleProduct(): Promise<void> {
    await this.removeProductFromCart(products[0].name);
    await this.verifyCartCount(0);
  }

  async goToCart(): Promise<void> {
    await this.cartLink.click();
    await expect(this.page).toHaveURL(routes.cart);
  }

  async verifyCartCount(expectedCount: number): Promise<void> {
    if (expectedCount === 0) {
      await expect(this.cartBadge).toHaveCount(0);
    } else {
      await expect(this.cartBadge).toHaveText(String(expectedCount));
    }
  }
}
