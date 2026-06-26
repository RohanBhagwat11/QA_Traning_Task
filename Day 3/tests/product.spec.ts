import { test } from "@playwright/test";
import { ProductsPage } from "../pages/ProductsPage";
import { products } from "../test-data/product";
import { loginAsStandardUser } from "../utils/testHelpers";

let productPage: ProductsPage;

test.describe("Product Tests", () => {
  test.beforeEach(async ({ page }) => {
    productPage = new ProductsPage(page);
    await loginAsStandardUser(page);
  });

  test("TC_005 - Product list should be visible after login @smoke", async () => {
    await productPage.verifyProductsPageIsVisible();
  });
});
