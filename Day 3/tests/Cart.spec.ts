import { test } from "@playwright/test";
import { ProductsPage } from "../pages/ProductsPage";
import { CartPage } from "../pages/CartPage";
import { loginAsStandardUser } from "../utils/testHelpers";

let productPage: ProductsPage;
let cartPage: CartPage;

test.describe("Cart Tests", () => {
  test.beforeEach(async ({ page }) => {
    productPage = new ProductsPage(page);
    cartPage = new CartPage(page);
    await loginAsStandardUser(page);
  });

  test("Add one Product to cart @regression ", async ({ page }) => {
    await productPage.addSingleProduct();
  });

  test("TC_007 - Remove product from cart @regression", async ({ page }) => {
    await productPage.addSingleProduct();
    await productPage.removeSingleProduct();
  });

  test("TC_008 - Add multiple products to cart @cart @regression", async ({
    page,
  }) => {
    await productPage.addMultipleProduct();
  });

  test("TC_009 - Cart page should show selected products @cart @regression", async ({
    page,
  }) => {
    await productPage.addMultipleProduct();
    await productPage.goToCart();
    await cartPage.verifyMultipleproductadded();
  });
});
