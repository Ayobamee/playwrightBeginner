
const { test, expect } = require('@playwright/test');

test('homepage has Playwright in title and get started link linking to the intro page', async ({ page }) => {
    await page.goto('https://www.instagram.com');

    // create a username locator
    const usernameField = page.locator('[aria-label="Phone number\, username\, or email"]');

    //   // Expect an attribute "to be strictly equal" to the value.
    //   await expect(getStarted).toHaveAttribute('href', '/docs/intro');

    // Click the get started link.
    await usernameField.type('username');

    //   // Expects the URL to contain intro.
    //   await expect(page).toHaveURL(/.*intro/);
});