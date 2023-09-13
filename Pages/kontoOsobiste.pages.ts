import { Page } from "@playwright/test";

export class Przelewy {
    static kontoosobiste: any;
    constructor(private page: Page) { }

    przelewButton = this.page.locator('body > section > div > div > nav > ul > li:nth-child(2) > div > a')
    wykonajprzelewButton = this.page.locator('//*[@id="pay_btn"]')
    status = this.page.locator('#show_messages')
}