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

// TC_005 Product list should be visible after login
test('product list visible', async({page})=>{

    await Login(page)
   
    await expect(page.locator('[data-test="inventory-container"]')).toBeVisible(); 
})