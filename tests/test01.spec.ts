import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demobank.jaktestowac.pl/logowanie_prod.html');
  await page.locator('#login_id').click();
  await page.locator('#login_id').fill('12345678');
  await page.locator('#login_id').blur();
  await page.getByRole('button', { name: 'dalej' }).click();
  await page.locator('#login_password').click();
  await page.locator('#login_password').fill('qweasdzx');
  await page.locator('#login_password').blur();
  await page.getByRole('button', { name: 'zaloguj się' }).click();
});