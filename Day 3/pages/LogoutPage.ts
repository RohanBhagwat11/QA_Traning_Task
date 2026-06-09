import { Page, Locator, expect } from '@playwright/test'; 

export class LogoutPage{
    readonly page: Page

    constructor(page:Page){
        this.page = page

    }

    async logout():Promise<void>{
        await this.page.getByRole('button', { name: 'Open Menu' }).click();
        await this.page.locator('[data-test="logout-sidebar-link"]').click()
    }

    async verifyLogout(): Promise<void>{
        await expect(this.page.locator('[data-test="login-button"]')).toBeVisible();
        await expect(this.page.locator('[data-test="username"]')).toBeVisible(); 
        await expect(this.page.locator('[data-test="password"]')).toBeVisible(); 
        await expect(this.page.locator('[data-test="login-button"]')).toBeVisible(); 
    }
}