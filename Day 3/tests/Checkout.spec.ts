import { test } from '@playwright/test';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { products } from '../test-data/product';
import { loginAsStandardUser } from '../utils/testHelpers';

test.describe('Checkout Tests', () => {

  // Reusable helper to reach the checkout form
  async function proceedToCheckoutForm(page: any): Promise<void> {
    await loginAsStandardUser(page);
    const productsPage = new ProductsPage(page);
    await productsPage.addProductToCart(products[0].name);
    await productsPage.goToCart();
    const cartPage = new CartPage(page);
    await cartPage.checkout();
  }

  test('TC_010 - Checkout with valid details should reach overview page @checkout @regression', async ({ page }) => {
    await proceedToCheckoutForm(page);
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.fillCheckoutDetails('John', 'Doe', '10001');
    await checkoutPage.continueCheckout();
    await checkoutPage.finishOrder();
    await checkoutPage.verifyOrderConfirmation();
  });

  test('TC_011 - Checkout with missing first name should show validation error @checkout @negative', async ({ page }) => {
    await proceedToCheckoutForm(page);
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.fillCheckoutDetails('', 'Doe', '10001');
    await checkoutPage.continueCheckout();
    await checkoutPage.verifyValidationMessage('First Name is required');
  });

  test('TC_012 - Checkout with missing postal code should show validation error @checkout @negative', async ({ page }) => {
    await proceedToCheckoutForm(page);
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.fillCheckoutDetails('John', 'Doe', '');
    await checkoutPage.continueCheckout();
    await checkoutPage.verifyValidationMessage('Postal Code is required');
  });

});
