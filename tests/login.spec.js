
const { test, expect } = require('@playwright/test');

test('User cannot login to instagram using incorrect details', async ({ page }) => {
    await page.goto('https://www.instagram.com');

    // create a username locator
    const usernameField = page.locator('[aria-label="Phone number\, username\, or email"]');

    // create a password locator
    const passwordField = page.locator('[aria-label="Password"]');
    // create the login button locator
    const loginBtn = page.locator('button:has-text("Log In") >> nth=0')
    // create error message locator
    const errorMsg = page.locator('[data-testid="login-error-message"]')

    // Enter username.
    await usernameField.type('username');

    //Enter password.
    await passwordField.type('password')

    //Click login
    await loginBtn.click()

    await expect(errorMsg).toBeVisible()

});