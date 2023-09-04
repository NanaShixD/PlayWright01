import { Page } from "@playwright/test";

export class LoginPage{
constructor(private page: Page) {}

loginInput = this.page.locator('#login_id')
passwordInput = this.page.locator('#login_password')
nextButton = this.page.getByRole('button', { name: 'dalej' })
loginButton = this.page.getByRole('button', { name: 'zaloguj się' })

}