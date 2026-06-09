import { test } from '@playwright/test';
import { ProductsPage } from '../pages/ProductsPage';
import {products} from '../test-data/product'
import { loginAsStandardUser } from '../utils/testHelpers';

test.describe('Product Tests', () => {

  test('TC_005 - Product list should be visible after login @smoke', async ({ page }) => {
    await loginAsStandardUser(page);
    const productsPage = new ProductsPage(page);
    await productsPage.verifyProductsPageIsVisible();
  });


});
