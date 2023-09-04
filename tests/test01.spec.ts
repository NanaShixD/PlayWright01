import { test, expect } from '@playwright/test';
import { loginData } from '../LoginData/logindata.data';

test.describe('Login path', () => {
  //Credki logowania
  //const Login = '12345678'
  //const Password = 'qweasdzx'
  const Login = loginData.Login;
  const Password = loginData.Password;

  test('Good login path', async ({ page }) => {
    await page.goto('/');
    await page.locator('#login_id').click();
    await page.locator('#login_id').fill(Login);
    await page.locator('#login_id').blur();
    await page.getByRole('button', { name: 'dalej' }).click();
    await page.locator('#login_password').click();
    await page.locator('#login_password').fill(Password);
    await page.locator('#login_password').blur();
    await page.getByRole('button', { name: 'zaloguj się' }).click();
  });
});