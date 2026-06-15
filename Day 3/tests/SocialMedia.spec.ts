import { test, expect, Page } from "@playwright/test";
import { loginAsStandardUser } from "../utils/testHelpers";
import { SocialMediaPage } from "../pages/SocialMediaPage";

test.describe("Social Media Links Test", () => {
  test("TC_015 - User should be able to navigate to comapny twitter page", async ({
    page,
  }) => {
    await loginAsStandardUser(page);

    const socialPage = new SocialMediaPage(page);

    await socialPage.gotoTwitter();
    await socialPage.verifyTwitterPage();
  });

  test("TC_016 - User should be able to navigate to comapny facebook page", async ({
    page,
  }) => {
    await loginAsStandardUser(page);

    const socialPage = new SocialMediaPage(page);

    await socialPage.gotoFacebook();
    await socialPage.verifyFacebookPage();
  });

  test("TC_017 - User should be able to navigate to comapny linkdein page", async ({
    page,
  }) => {
    await loginAsStandardUser(page);

    const socialPage = new SocialMediaPage(page);

    await socialPage.gotoLinkedin();
    await socialPage.verifyLinkedinPage();
  });
});
