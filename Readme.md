const { test, expect } = require('@playwright/test') - imports the test and assertion libraries for playwright.
Tests are written in the test block.
Be sure to preceed all playwright functions with the await keyword, this is because playwright uses the async concept ie executes lines of code simultenously, the await keyword waits till promise is resolved which means the 2nd line of code executes after the first line of code.
 page.goto() is a playwright function used to visit a page.
 page.locator() is a playwright function used to write a locator for a D.O.M element.
The page.locator function chained with .type() method is used to perform a type action eg await page.locator('mylocator').type('myname') types my name using mylocator
The page.locator function chained with .click() method is used to perform a click action eg  page.locator('myclicklocator').click() clicks myclicklocator
expect()is a playwright function used for assertion eg await expect('mylocator').isVisible(), this asserts that mylocator is visible.
package.json is the profile settings for the project, with Autor name, scripts and dependencies and its versions.
Once this repo is pulled (from https://github.com/Ayobamee/playwrightBeginner)run 'npm install' on terminal/command prompt, this installs all the dependencies locally for this project.
playwright.config.js is the main configuration file for playwright, you can set number of retries for a test, how many workers you want your test to run on, browser type to run on , specify if you want you test to run in headless more or headed , you can enable screenshots , specify reporters and traces.
For more info about playwright please visit https://playwright.dev.
You can also visit https://github.com/Ayobamee/Letsdeel to see an advanced framework i wrote with Playwright using P.O.M which has functions for actions and assertions.

Author: Ayobami Elutade ©2022.