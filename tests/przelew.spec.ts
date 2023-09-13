import { test, expect } from '@playwright/test';
import { loginData } from '../LoginData/logindata.data';
import { LoginPage } from '../Pages/Login.pages';
import { Przelewy } from '../Pages/Przelewy.pages';

test.describe('Login path', () => {
    //Credki logowania
    const Login = loginData.Login;
    const Password = loginData.Password;

    test.beforeEach(async ({ page }, testInfo) => {
        await page.goto('/');
        const loginPage = new LoginPage(page);
        await loginPage.loginInput.click();
        await loginPage.loginInput.fill(Login);
        await loginPage.loginInput.blur();
        await loginPage.nextButton.click();
        await loginPage.passwordInput.click();
        await loginPage.passwordInput.fill(Password);
        await loginPage.passwordInput.blur();
        await loginPage.loginButton.click();
    });


    test('Good login path', async ({ page }) => {
        const przelewMenu = new Przelewy(page);
        await przelewMenu.przelewButton.click();
        await przelewMenu.wykonajprzelewButton.click()
        await expect(przelewMenu.status).toHaveText("Przelew na 'Konto na życie' wykonany");

    });
});

