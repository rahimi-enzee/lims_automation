import { expect, type Locator, type Page } from '@playwright/test';
import { DashboardPage } from './dashboard';

export class LoginPage {
    readonly page: Page;
    readonly dashboardPage: DashboardPage;

    readonly headerText: Locator;
    readonly emailLink: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly logoutButton: Locator;
    readonly errorMgs: Locator;

    constructor(page: Page) {
        this.page = page;
        this.dashboardPage = new DashboardPage(page);

        this.headerText = this.page.getByText('Laboratory Information');
        this.emailLink = this.page.getByRole('link', { name: 'E-mel' });
        this.emailInput = this.page.getByRole('textbox', { name: 'E-mel' });
        this.passwordInput = this.page.getByRole('textbox', { name: 'Kata laluan' });
        this.loginButton = this.page.getByRole('button', { name: 'Log masuk' })
        this.logoutButton = this.page.getByRole('navigation').filter({ hasText: 'Log keluar' })
        this.errorMgs = this.page.getByText('E-mel jabatan diperlukan.')
    };

    async visibilityCheck() {
        await expect(this.headerText).toBeVisible();
        await expect(this.emailLink).toBeVisible();
    };

    async navigateToAndVisible() {
        await this.page.goto("/");
        await this.visibilityCheck();
    };

    async login(email: string, password: string) {
        await this.emailLink.click();
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);

        console.log("Before click")
        console.log(await this.page.url()); // Check if the URL changed after clicking login

        await this.loginButton.click();

        console.log("After click")
        console.log(await this.page.url()); // Check if the URL changed after clicking login

        await this.dashboardPage.visibilityCheck();
    };

    async logout() {
        await this.logoutButton.click();
        await this.visibilityCheck();
    };



}
