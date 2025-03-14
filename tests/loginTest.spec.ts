import { test, expect } from "../fixtures/fixture.ts";

test.describe("Login-Positive Scenario", () => {
    test("login-email positive", async ({ loginAs, loginPage }) => {
        await loginAs("normalUser");
        await loginPage.logout();
    });

});