import { Page } from "@playwright/test";

export class LoginPage{
constructor(private page: Page) {}

logininput = this.page.locator('#login_id')

}