import { Page, Locator, expect } from "@playwright/test";
import { routes } from "../Constants/routes";
import { errorMsg } from "../Constants/errorMsg";
import { userdata } from "../test-data/userdata";

export class CheckoutPage {
  readonly page: Page;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly postalCodeInput: Locator;
  readonly continueButton: Locator;
  readonly finishButton: Locator;
  readonly errorMessage: Locator;
  readonly confirmationHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInput = page.locator('[data-test="firstName"]');
    this.lastNameInput = page.locator('[data-test="lastName"]');
    this.postalCodeInput = page.locator('[data-test="postalCode"]');
    this.continueButton = page.locator('[data-test="continue"]');
    this.finishButton = page.locator('[data-test="finish"]');
    this.errorMessage = page.locator('[data-test="error"]');
    this.confirmationHeader = page.locator('[data-test="complete-header"]');
  }

  async fillCheckoutDetails(
    firstName: string,
    lastName: string,
    postalCode: string,
  ): Promise<void> {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
  }

  async fillValidCheckoutDetails(): Promise<void> {
    await this.fillCheckoutDetails(
      userdata[0].firstname,
      userdata[0].lastname,
      userdata[0].postalcode,
    );
  }

  async fillWithMissingFirstName(): Promise<void> {
    await this.fillCheckoutDetails(
      "",
      userdata[0].lastname,
      userdata[0].postalcode,
    );
  }

  async fillWithMissingLastName(): Promise<void> {
    await this.fillCheckoutDetails(
      userdata[0].firstname,
      "",
      userdata[0].postalcode,
    );
  }

  async fillWithMissingPostalcode(): Promise<void> {
    await this.fillCheckoutDetails(
      userdata[1].firstname,
      userdata[1].lastname,
      "",
    );
  }

  async continueCheckout(): Promise<void> {
    await this.continueButton.click();
  }

  async verifyValidationMessage(expectedMessage: string): Promise<void> {
    await expect(this.errorMessage).toContainText(expectedMessage);
  }

  async verifyMissingFirstNameMessage(): Promise<void> {
    await this.verifyValidationMessage(errorMsg.firstNameRequired);
  }

  async verifyMissingLastNameMessage(): Promise<void> {
    await this.verifyValidationMessage(errorMsg.lastNameRequired);
  }

  async verifyMissingPostalCodeMessage(): Promise<void> {
    await this.verifyValidationMessage(errorMsg.postalCodeRequired);
  }

  async finishOrder(): Promise<void> {
    await this.finishButton.click();
    await expect(this.page).toHaveURL(routes.checkoutComplete);
  }

  async verifyOrderConfirmation(): Promise<void> {
    await expect(this.confirmationHeader).toContainText(errorMsg.OrderSuccess);
  }
}
