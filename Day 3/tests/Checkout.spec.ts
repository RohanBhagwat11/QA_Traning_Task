import { test } from "@playwright/test";
import { ProductsPage } from "../pages/ProductsPage";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { loginAsStandardUser } from "../utils/testHelpers";

let productPage: ProductsPage;
let cartPage: CartPage;
let checkoutPage: CheckoutPage;

test.describe("Checkout Tests", () => {

  test.beforeEach(async ({ page }) => {
    productPage = new ProductsPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);

    await loginAsStandardUser(page);
    await productPage.addMultipleProduct();
    await productPage.goToCart();
    await cartPage.checkout();
  });

  test("TC_010 - Checkout with valid details should reach overview page @checkout @regression", async ({
    page,
  }) => {
    await checkoutPage.fillValidCheckoutDetails();
    await checkoutPage.continueCheckout();
    await checkoutPage.finishOrder();
    await checkoutPage.verifyOrderConfirmation();
  });

  test("TC_011 - Checkout with missing first name should show validation error @checkout @negative", async ({
    page,
  }) => {
    await checkoutPage.fillWithMissingFirstName();
    await checkoutPage.continueCheckout();
    await checkoutPage.verifyMissingFirstNameMessage();
  });

  test("TC_012 - Checkout with missing last name should show validation error @checkout @negative", async ({
    page,
  }) => {
    await checkoutPage.fillWithMissingLastName();
    await checkoutPage.continueCheckout();
    await checkoutPage.verifyMissingLastNameMessage();
  });

  test("TC_013 - Checkout with missing postal code should show validation error @checkout @negative", async ({
    page,
  }) => {
    await checkoutPage.fillWithMissingPostalcode();
    await checkoutPage.continueCheckout();
    await checkoutPage.verifyMissingPostalCodeMessage();
  });
});
