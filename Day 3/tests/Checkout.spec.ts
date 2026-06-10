import { test } from '@playwright/test';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { products } from '../test-data/product';
import { loginAsStandardUser } from '../utils/testHelpers';
import { userdata } from '../test-data/userdata'
import { errorMsg} from '../Constants/errorMsg'

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
    await checkoutPage.fillCheckoutDetails(userdata[0].firstname, userdata[0].lastname, userdata[0].postalcode);
    await checkoutPage.continueCheckout();
    await checkoutPage.finishOrder();
    await checkoutPage.verifyOrderConfirmation();
  });

  test('TC_011 - Checkout with missing first name should show validation error @checkout @negative', async ({ page }) => {
    await proceedToCheckoutForm(page);
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.fillCheckoutDetails('', userdata[0].lastname, userdata[0].postalcode);
    await checkoutPage.continueCheckout();
    await checkoutPage.verifyValidationMessage(errorMsg.firstNameRequired);
  });

  test('TC_012 - Checkout with missing last name should show validation error @checkout @negative', async ({ page }) => {
    await proceedToCheckoutForm(page);
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.fillCheckoutDetails(userdata[0].firstname, '', userdata[0].postalcode);
    await checkoutPage.continueCheckout();
    await checkoutPage.verifyValidationMessage(errorMsg.lastNameRequired);
  });

  test('TC_013 - Checkout with missing postal code should show validation error @checkout @negative', async ({ page }) => {
    await proceedToCheckoutForm(page);
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.fillCheckoutDetails(userdata[1].firstname, userdata[1].lastname, '');
    await checkoutPage.continueCheckout();
    await checkoutPage.verifyValidationMessage(errorMsg.postalCodeRequired);
  });

});
