import { test, expect } from '@playwright/test';
import { loginData } from '../LoginData/logindata.data';
import { loginaction } from '../Actions/loginaction.spec';


test.describe('Login path', () => {
  //Credki logowania
  const Login = loginData.Login;
  const Password = loginData.Password;

  test.beforeEach(async ({ page }, testInfo) => {
    await loginaction(page, Login, Password);
  });

  test('test', async ({ page }) => {
    await page.getByRole('link', { name: 'doładowanie telefonu' }).click();
    await page.locator('#widget_1_topup_receiver').selectOption('500 xxx xxx');
    await page.locator('#widget_1_topup_amount').click();
    await page.locator('#widget_1_topup_amount').fill('120');
    await page.locator('#uniform-widget_1_topup_agreement span').click();
    await page.getByText('kwota', { exact: true }).click();
    await page.locator('#widget_1_topup_amount').click();
    await page.getByRole('button', { name: 'doładuj telefon' }).click();
    await expect(page.locator('#show_messages')).toHaveText("Doładowanie wykonane! 120,00PLN na numer 500 xxx xxx", { timeout: 60000 });
  });
})