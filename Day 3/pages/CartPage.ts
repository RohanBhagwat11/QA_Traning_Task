import { Page, Locator, expect } from "@playwright/test";
import { routes } from "../Constants/routes";
import { products } from "../test-data/product";

export class CartPage {
  readonly page: Page;
  readonly cartItems: Locator;
  readonly checkoutButton: Locator;
  readonly continueShoppingButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartItems = page.locator(".cart_item");
    this.checkoutButton = page.locator('[data-test="checkout"]');
    this.continueShoppingButton = page.locator(
      '[data-test="continue-shopping"]',
    );
  }

  async verifyProductInCart(productName: string): Promise<void> {
    await expect(
      this.page.locator('[data-test="inventory-item-name"]', {
        hasText: productName,
      }),
    ).toBeVisible();
  }

  async removeProduct(productName: string): Promise<void> {
    await this.cartItems
      .filter({ hasText: productName })
      .getByRole("button", { name: "Remove" })
      .click();
  }

  async continueShopping(): Promise<void> {
    await this.continueShoppingButton.click();
    await expect(this.page).toHaveURL(routes.Product);
  }

  async checkout(): Promise<void> {
    await this.checkoutButton.click();
    await expect(this.page).toHaveURL(routes.checkout);
  }

  async verifyMultipleproductadded(): Promise<void> {
    for (const product of products) {
      await this.verifyProductInCart(product.name);
    }
  }
}
