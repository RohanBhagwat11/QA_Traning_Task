import { test, expect, Page } from "@playwright/test";
import { loginAsStandardUser } from "../utils/testHelpers";
import { SidelinkPage } from "../pages/SidelinkPage";

test.describe("Logout Tests", () => {
  test("TC_014 - User should be able to logout", async ({ page }) => {
    await loginAsStandardUser(page);

    const logoutPage = new SidelinkPage(page);

    await logoutPage.logout();
    await logoutPage.verifyLogout();
  });
});
