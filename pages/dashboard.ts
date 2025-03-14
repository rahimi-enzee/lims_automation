import { expect, type Locator, type Page } from '@playwright/test';

export class DashboardPage {
    readonly page: Page;
    readonly headerText: Locator;
    readonly permohonanKesBaruButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.headerText = this.page.getByRole('heading', { name: 'Senarai Permohonan Kes' });
        this.permohonanKesBaruButton = this.page.getByRole('button', { name: 'Permohonan kes baharu' });
    }

    async visibilityCheck() {
        await expect(this.headerText).toBeVisible();
        await expect(this.permohonanKesBaruButton).toBeVisible();
    };

}