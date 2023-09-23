// loginActions.ts

export async function loginaction(page: any, Login: string, Password: string) {

      await page.goto('/');  
      await page.locator('#login_id').click();
      await page.locator('#login_id').fill(Login);
      await page.locator('#login_id').blur();
      await page.getByRole('button', { name: 'dalej' }).click();
      await page.locator('#login_password').click();
      await page.locator('#login_password').fill(Password);
      await page.locator('#login_password').blur();
      await page.getByRole('button', { name: 'zaloguj się' }).click();
    }
