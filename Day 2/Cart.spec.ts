import {test, expect,Page} from '@playwright/test';
import {users} from '../../test-data/users';

async function Login(page:Page){
     const user = users.find(u => u.type === 'standard')
    if(!user) throw new Error("User not found")

    await page.goto("https://www.saucedemo.com/");

    await page.locator('[data-test="username"]').fill(user.username);
    await page.locator('[data-test="password"]').fill(user.password);
    await page.locator('[data-test="login-button"]').click();
}


// TC_006 Add one product to cart

test('add product to cart', async({page})=>{

    await Login(page)
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

   

    await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible();
})

// TC_007 Remove product from cart

test('remove product from the cart', async({page})=>{

    await Login(page)


    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="remove-sauce-labs-backpack"]').click()

    await expect(page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')).toBeVisible()

})

// TC_008 Add mutliple product to cart

test('add multiple product to cart', async({page})=>{

    await Login(page)

    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();

    await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('3');


})

// TC_009 Cart page should show selected products

test('Cart page show selected products', async({page})=>{

    await Login(page)
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    await page.locator('[data-test="shopping-cart-badge"]').click()

    await expect(page.locator('[data-test="inventory-item"]')).toHaveCount(3)


})

