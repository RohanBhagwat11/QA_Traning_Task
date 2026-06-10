import { Page, Locator, expect } from '@playwright/test'; 
import {routes} from '../Constants/routes'

export class SocialMediaPage{
    readonly page: Page

    constructor(page:Page){
        this.page = page

    }

    async gotoTwitter():Promise<void>{
        await this.page.goto(routes.Twitter)
    }

    async verifyTwitterPage(): Promise<void>{
    
        await expect(this.page.getByRole('link', { name: 'X', exact: true })).toBeVisible();
       }

     async gotoFacebook():Promise<void>{
        await this.page.goto(routes.Facebook)
    }

    async verifyFacebookPage(): Promise<void>{
    
    await this.page.getByRole('button', { name: 'Close' }).click();
    await expect(this.page.getByRole('button', { name: 'Facebook' })).toBeVisible();
   
    }
    

     async gotoLinkedin():Promise<void>{
        await this.page.goto(routes.Linkedin)
    }

    async verifyLinkedinPage(): Promise<void>{
    
   await this.page.getByRole('button', { name: 'Dismiss' }).click();
   await expect(this.page.getByRole('link', { name: 'LinkedIn', exact: true })).toBeVisible();
    }
}
