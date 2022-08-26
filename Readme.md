const { test, expect } = require('@playwright/test') - imports the test and assertion libraries for playwright.
Tests are written in the test block.
Be sure to preceed all playwright functions with the await keyword, this is because playwright uses the async concept ie executes lines of code simultenously, the await keyword waits till promise is resolved which means the 2nd line of code executes after the first line of code.
 page.goto() is a playwright function used to visit a page.
 page.locator() is a playwright function used to write a locator for a D.O.M element.
The page.locator function chained with .type() method is used to perform a type action eg await page.locator('mylocator').type('myname').
The page.locator function chained with .click() method is used to perform a click action eg  page.locator('myclicklocator').click().
 expect()is a playwright used for assertion eg await expect('mylocator).isVisible(), this asserts that mylocator is visible.
For more info about playwright visit https://playwright.dev.
You can also visit https://github.com/Ayobamee/Letsdeel to see an advanced framework i wrote with Playwright using P.O.M which has functions for actions and assertions.

Author: Ayobami Elutade ©2022.