import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly headerText: Locator;
    readonly emailLink: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    // this is random
    readonly captchaCheckbox: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.headerText = this.page.getByText('Laboratory Information');
        this.emailLink = this.page.getByRole('link', { name: 'E-mel' });
        this.emailInput = this.page.getByRole('textbox', { name: 'E-mel' });
        this.passwordInput = this.page.getByRole('textbox', { name: 'Kata laluan' });
        this.captchaCheckbox = this.page.locator('iframe[name="a-41xc0t1uxxt5"]').contentFrame().getByRole('checkbox', { name: 'Saya bukan robot' });
        this.loginButton = page.getByRole('button', { name: 'Log masuk' })
    };

    async navigateToAndVisible() {
        await this.page.goto("/");
        await expect(this.headerText).toBeVisible();
        await expect(this.emailLink).toBeVisible();
    }

    async login(email: string, password: string) {
        await this.emailLink.click();
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        if (await this.captchaCheckbox.isVisible()) {
            await this.captchaCheckbox.click();
        }
        await this.loginButton.click();

        await expect(this.page.getByRole('heading', { name: 'Senarai Permohonan Kes' })).toBeVisible({ timeout: 10000 });
        await expect(this.page.getByRole('button', { name: 'Permohonan kes baharu' })).toBeVisible();
    }

}
