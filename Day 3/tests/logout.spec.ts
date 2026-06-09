import {test, expect,Page} from '@playwright/test';
import { loginAsStandardUser } from '../utils/testHelpers';
import { LogoutPage} from '../pages/LogoutPage'


test.describe('Logout Tests', ()=>{
test('TC_013 - User should be able to logout', async({page})=>{

    await loginAsStandardUser(page);

    const logoutPage = new LogoutPage(page);

    await logoutPage.logout()
    await logoutPage.verifyLogout()
});

})