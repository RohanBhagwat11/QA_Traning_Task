import { test, expect } from '@playwright/test';
import { users} from './users';



// TC_001 - Login page should load
test('Login page should load', async ({page}) =>{
   await page.goto('https://www.saucedemo.com/');
  });


// TC_002 - Valid user should be able to login
test('Valid User Login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
 
  const user = users.find(u => u.type === 'standard');
  if (!user) throw new Error('User not found');

  await page.locator('#user-name').fill(user.username)

  await page.locator('#password').fill(user.password)

  await page.locator('#login-button').click()
});


// TC_003 - Invalid password should show error
test('InValid Password error', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  const user = users.find(u => u.type === 'standard');
  if (!user) throw new Error('User not found');

  await page.locator('#user-name').fill(user.username)

  await page.locator('#password').fill("invalid password")

  await page.locator('#login-button').click()
    
});


// TC_004 - Locked user should not be able to login
test('Locked user login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  const user = users.find(u => u.type === 'locked');
  if (!user) throw new Error('User not found');

  await page.locator('#user-name').fill(user.username)

  await page.locator('#password').fill(user.password)

  await page.locator('#login-button').click()
    
});