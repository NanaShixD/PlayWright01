import { test, expect } from '@playwright/test';
import { loginData } from '../LoginData/logindata.data';
import { LoginPage } from '../Pages/Login.pages';

test.describe('Login path', () => {
  //Credki logowania
  const Login = loginData.Login;
  const Password = loginData.Password;

  //   test('Good login path', async ({ page }) => {
  //     await page.goto('/');  
  //     await page.locator('#login_id').click();
  //     await page.locator('#login_id').fill(Login);
  //     await page.locator('#login_id').blur();
  //     await page.getByRole('button', { name: 'dalej' }).click();
  //     await page.locator('#login_password').click();
  //     await page.locator('#login_password').fill(Password);
  //     await page.locator('#login_password').blur();
  //     await page.getByRole('button', { name: 'zaloguj się' }).click();
  //   });
  // });

  test('Good login path', async ({ page }) => {
    await page.goto('/');
    const Login = loginData.Login;
    const Password = loginData.Password;
    const expectedUserName = 'Jan Demobankowy';

    // Act
    const loginPage = new LoginPage(page);
    await loginPage.loginInput.click();
    await loginPage.loginInput.fill(Login);
    await loginPage.loginInput.blur();
    await loginPage.nextButton.click();
    await loginPage.passwordInput.click();
    await loginPage.passwordInput.fill(Password);
    await loginPage.passwordInput.blur();
    await loginPage.loginButton.click();
    // await page.locator('#login_id').fill(Login);
    // await page.locator('#login_id').blur();
    // await page.getByRole('button', { name: 'dalej' }).click();
    // await page.locator('#login_password').click();
    // await page.locator('#login_password').fill(Password);
    // await page.locator('#login_password').blur();
    // await page.getByRole('button', { name: 'zaloguj się' }).click();
  });
});

