import { test, expect } from "../fixtures/fixture.ts";

test("login as user", async ({ loginAs }) => {
    await loginAs("normalUser");
});