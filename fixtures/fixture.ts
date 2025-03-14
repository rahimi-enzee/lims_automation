import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/login';

import { users } from '../data/users';
type UserRole = keyof typeof users;

type LimsFixture = {
    loginPage: LoginPage;
    loginAs: (role: UserRole) => Promise<void>;
}

export const test = base.extend<LimsFixture>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },

    loginAs: async ({ page }, use) => {
        await use(async (role: UserRole) => {
            const user = users[role];

            if (!user) {
                throw new Error("Invalid account");
            }

            const loginPage = new LoginPage(page);
            await loginPage.navigateToAndVisible();
            await loginPage.login(user.email, user.password);
            console.log("PASSED: LOGIN");
        });
    },

});

export { expect };