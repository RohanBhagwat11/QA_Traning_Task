import { test } from "@playwright/test";
import { ProductsPage } from "../pages/ProductsPage";
import { CartPage } from "../pages/CartPage";
import { products } from "../test-data/product";
import { loginAsStandardUser } from "../utils/testHelpers";


test.describe("Cart Tests", () => {
/*  test("TC_006 - Add one product to cart @regression", async ({ page }) => {
    await loginAsStandardUser(page);
    const productsPage = new ProductsPage(page);
    await productsPage.addProductToCart(products[0].name);
    await productsPage.verifyCartCount(1);
  });
  */

   test(`Add Product- ${products[0].name}`, async ({ page }) => {
    await loginAsStandardUser(page)

    const productPage = new ProductsPage(page)

    await productPage.addProductToCart(products[0].name);
    
    await productPage.verifyCartCount(products[0].expectedCartCount);
  });

  test("TC_007 - Remove product from cart @regression", async ({ page }) => {
    await loginAsStandardUser(page);
    const productsPage = new ProductsPage(page);
    await productsPage.addProductToCart(products[0].name);
    await productsPage.verifyCartCount(1);
    await productsPage.removeProductFromCart(products[0].name);
    await productsPage.verifyCartCount(0);
  });

  test("TC_008 - Add multiple products to cart @cart @regression", async ({
    page,
  }) => {
    await loginAsStandardUser(page);
    const productsPage = new ProductsPage(page);

    for (const product of products) {
      await productsPage.addProductToCart(product.name);
    }

    await productsPage.verifyCartCount(products.length);
  });

  test("TC_009 - Cart page should show selected products @cart @regression", async ({
    page,
  }) => {
    await loginAsStandardUser(page);
    const productsPage = new ProductsPage(page);

    for (const product of products) {
      await productsPage.addProductToCart(product.name);
    }

    await productsPage.goToCart();
    const cartPage = new CartPage(page);

    for (const product of products) {
      await cartPage.verifyProductInCart(product.name);
    }
  });
});
