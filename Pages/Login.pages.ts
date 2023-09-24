import { Page } from "@playwright/test";

export class LoginPage {
    static loginInput: any;
    constructor(private page: Page) { }

    loginInput = this.page.locator('#login_id')
    passwordInput = this.page.locator('#login_password')
    nextButton = this.page.getByRole('button', { name: 'dalej' })
    loginButton = this.page.getByRole('button', { name: 'zaloguj się' })
    loqoutButton = this.page.getByRole('link', { name: 'Wyloguj' })

}