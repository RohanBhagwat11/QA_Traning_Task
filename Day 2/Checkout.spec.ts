import {test, expect, Page} from '@playwright/test';
import { users } from '../../test-data/users';

//function for login
async function Login(page: Page) {
     const user = users.find(u => u.type === 'standard')
    if(!user) throw new Error("User not found")

    await page.goto("https://www.saucedemo.com/");

    await page.locator('[data-test="username"]').fill(user.username);
    await page.locator('[data-test="password"]').fill(user.password);
    await page.locator('[data-test="login-button"]').click();
    
}

// function for Adding product to cart
async function Addproduct(page:Page) {
     await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    await page.locator('[data-test="shopping-cart-badge"]').click()
    
}
// TC_010 Checkout with valid details

test('checkout with valid details', async({page})=>{

    await Login(page)
    await Addproduct(page)

    await page.locator('[data-test="checkout"]').click()

    await page.locator('[data-test="firstName"]').fill("Rohan")
    await page.locator('[data-test="lastName"]').fill("Bhagwat")
    await page.locator('[data-test="postalCode"]').fill('400506')
    await page.locator('[data-test="continue"]').click()

    await expect(page.locator('[data-test="title"]')).toHaveText('Checkout: Overview')
})

// TC_011 Checkout with missing first name

test('checkout with missing first name', async({page})=>{

    await Login(page)
    await Addproduct(page)

    await page.locator('[data-test="checkout"]').click()

    await page.locator('[data-test="lastName"]').fill("Bhagwat")
    await page.locator('[data-test="postalCode"]').fill('400506')
    await page.locator('[data-test="continue"]').click()

    await expect(page.locator('[data-test="error"]')).toHaveText("Error: First Name is required")


})

// TC_012 Checkout with missing postal code

test('checkout with missing postal code', async({page})=>{

    await Login(page)
    await Addproduct(page)

    await page.locator('[data-test="checkout"]').click()

    await page.locator('[data-test="firstName"]').fill("Rohan")
    await page.locator('[data-test="lastName"]').fill("Bhagwat")
    await page.locator('[data-test="continue"]').click()

await expect(page.locator('[data-test="error"]')).toHaveText("Error: Postal Code is required")

})