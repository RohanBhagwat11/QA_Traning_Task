import { Page, Locator, expect } from '@playwright/test'; 

export class SocialMediaPage{
    readonly page: Page

    constructor(page:Page){
        this.page = page

    }

    async gotoTwitter():Promise<void>{
        await this.page.goto("https://x.com/saucelabs")
    }

    async verifyTwitterPage(): Promise<void>{
    
        await expect(this.page.getByRole('link', { name: 'X', exact: true })).toBeVisible();
       }

     async gotoFacebook():Promise<void>{
        await this.page.goto("https://www.facebook.com/saucelabs")
    }

    async verifyFacebookPage(): Promise<void>{
    
    await this.page.getByRole('button', { name: 'Close' }).click();
    await expect(this.page.getByRole('button', { name: 'Facebook' })).toBeVisible();
   
    }
    

     async gotoLinkedin():Promise<void>{
        await this.page.goto("https://www.linkedin.com/company/sauce-labs/")
    }

    async verifyLinkedinPage(): Promise<void>{
    
   await this.page.getByRole('button', { name: 'Dismiss' }).click();
   await expect(this.page.getByRole('link', { name: 'LinkedIn', exact: true })).toBeVisible();
    }
}