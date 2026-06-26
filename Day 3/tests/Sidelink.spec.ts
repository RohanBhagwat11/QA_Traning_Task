import { test, expect, Page } from "@playwright/test";
import { loginAsStandardUser } from "../utils/testHelpers";
import { SidelinkPage } from "../pages/SidelinkPage";

let sidelinkPage: SidelinkPage;

test.describe("Logout Tests", () => {
  test.beforeEach(async ({ page }) => {
    sidelinkPage = new SidelinkPage(page);
    await loginAsStandardUser(page);
  });

  test("TC_014 - User should be able to logout", async ({ page }) => {
    await sidelinkPage.logout();
    await sidelinkPage.verifyLogout();
  });
});
