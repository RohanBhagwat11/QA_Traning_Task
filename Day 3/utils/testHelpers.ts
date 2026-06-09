import {Page} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { users } from '../test-data/users';

export async function loginAsStandardUser(page: Page): Promise<void> { 
  const loginPage = new LoginPage(page); 

  const user = users.find(u => u.type === 'standard');
  if (!user) throw new Error('User not found');
 
  await loginPage.goto(); 
  await loginPage.login(user.username, user.password); 
}


