import { test, expect } from '@playwright/test';
import { loginData } from '../LoginData/logindata.data';
import { LoginPage } from '../Pages/Login.pages';
import { Przelewy } from '../Pages/Przelewy.pages';
import { loginaction } from '../Actions/loginaction.spec';

test.describe('Login path', () => {
    //Credki logowania
    const Login = loginData.Login;
    const Password = loginData.Password;

    test.beforeEach(async ({ page }, testInfo) => {
        await loginaction(page, Login, Password); 
    });

    test('Good login path', async ({ page }) => {
        const przelewMenu = new Przelewy(page);
        await przelewMenu.przelewButton.click();
        await przelewMenu.wykonajprzelewButton.click()
        await expect(przelewMenu.status).toHaveText("Przelew na 'Konto na życie' wykonany");
    });





    
});