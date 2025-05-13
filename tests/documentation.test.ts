import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';
// Alternative import method:
// Use common Allure utilities for JavaScript integration from 'allure-js-commons' if 'allure-playwright' is not used
// import * as allure from 'allure-js-commons';

// Test #1A - test uses 'allure.step' wrappers for steps

test('Should display correct title on the documentation homepage - using allure.step() wrappers', async ({ page }) => {
  await allure.description('Ensures the documentation homepage has the correct title');
  await allure.epic('Allure TestOps Documentation');
  await allure.feature('Content');
  await allure.story('Page Title');
  await allure.tags('Homepage', 'UI', 'Validation');

  await allure.step('Navigate to the Allure TestOps documentation homepage', async () => {
    await page.goto('https://docs.qameta.io/allure-testops/');
  });

  await allure.step('Verify that the page title includes "Allure TestOps"', async () => {
    await expect(page).toHaveTitle(/Allure TestOps/);
  });
});

// Test #1B - test uses 'test.step' wrappers for steps

test('Should display correct title on the documentation homepage - using test.step() wrappers', async ({ page }) => {
  await allure.description('Ensures the documentation homepage has the correct title');
  await allure.epic('Allure TestOps Documentation');
  await allure.feature('Content');
  await allure.story('Page Title');
  await allure.tags('Homepage', 'UI', 'Validation');

  await test.step('Navigate to the Allure TestOps documentation homepage', async () => {
    await page.goto('https://docs.qameta.io/allure-testops/');
  });

  await test.step('Verify that the page title includes "Allure TestOps"', async () => {
    await expect(page).toHaveTitle(/Allure TestOps/);
  });
});

// Test #1C - test has no 'test.step' or 'allure.step' wrappers for steps

test('Should display correct title on the documentation homepage - without using step wrappers', async ({ page }) => {
  await allure.description('Ensures the documentation homepage has the correct title');
  await allure.epic('Allure TestOps Documentation');
  await allure.feature('Content');
  await allure.story('Page Title');
  await allure.tags('Homepage', 'UI', 'Validation');

  await page.goto('https://docs.qameta.io/allure-testops/');

  await expect(page).toHaveTitle(/Allure TestOps/);
});

// Test #2

test('Should display correct header on the documentation homepage', async ({ page }) => {
  await allure.description('Ensures the documentation homepage has the correct main heading');
  await allure.epic('Allure TestOps Documentation');
  await allure.feature('Content');
  await allure.story('Page Header');
  await allure.tags('Homepage', 'UI', 'Validation');

  await allure.step('Navigate to the Allure TestOps documentation homepage', async () => {
    await page.goto('https://docs.qameta.io/allure-testops/');
  });

  await allure.step('Verify that the main header includes "Allure TestOps"', async () => {
    await expect(page.locator('h1')).toContainText('Allure TestOps');
  });
});

// Test #3

test('Should navigate to the Overview page when the link is clicked', async ({ page }) => {
  await allure.description('Validates the navigation to the Overview page via the sidebar link');
  await allure.epic('Allure TestOps Documentation');
  await allure.feature('Navigation');
  await allure.story('Section');
  await allure.tags('Navigation', 'UI');

  await allure.step('Navigate to the Allure TestOps documentation homepage', async () => {
    await page.goto('https://docs.qameta.io/allure-testops/');
  });

  await allure.step('Verify that the page title includes "Allure TestOps"', async () => {
    await expect(page).toHaveTitle(/Allure TestOps/);
  });

  await allure.step('Click the "Overview" link in the navigation', async () => {
    await page.click('text=Overview');
  });

  await allure.step('Verify that the URL includes "overview"', async () => {
    await expect(page).toHaveURL(/.*overview/);
  });

  await allure.step('Verify that the page header is "Allure TestOps interface"', async () => {
    await expect(page.locator('h1')).toContainText('Allure TestOps interface');
  });
});

// Test #4

test('Should display the sidebar and open Getting Started section', async ({ page }) => {
  await allure.description('Verifies that the sidebar is visible and that the "Getting Started" section can be opened');
  await allure.epic('Allure TestOps Documentation');
  await allure.feature('Navigation');
  await allure.story('Sidebar');
  await allure.tags('Navigation', 'Sidebar', 'UI');

  await allure.step('Navigate to the Allure TestOps documentation homepage', async () => {
    await page.goto('https://docs.qameta.io/allure-testops/');
  });

  await allure.step('Verify that the sidebar is visible', async () => {
    await expect(page.locator('nav')).toBeVisible();
  });

  await allure.step('Verify that the sidebar contains "Getting started"', async () => {
    await expect(page.locator('nav')).toContainText('Getting started');
  });

  await allure.step('Click the "Getting started" section', async () => {
    await page.click('text=Getting started');
  });

  await allure.step('Verify that the "Getting started" section is open', async () => {
    await expect(page.locator('h1')).toContainText('Getting started');
  });
});

// Test #5

test('Should open Install page via "to deploy Allure TestOps" link', async ({ page }) => {
  await allure.description('Confirms that the "To deploy Allure TestOps" link navigates to the Install page');
  await allure.epic('Allure TestOps Documentation');
  await allure.feature('Navigation');
  await allure.story('Section');
  await allure.tags('Installation', 'Link', 'Navigation');

  await allure.step('Navigate to the Allure TestOps documentation homepage', async () => {
    await page.goto('https://docs.qameta.io/allure-testops/');
  });

  await allure.step('Locate the "to deploy Allure TestOps" link', async () => {
    const deployLink = page.locator('a', { hasText: 'to deploy Allure TestOps' });
    await expect(deployLink).toBeVisible();
  });

  await allure.step('Click the "to deploy Allure TestOps" link', async () => {
    const installLink = page.locator('a', { hasText: 'to deploy Allure TestOps' });
    await installLink.click();
  });

  await allure.step('Verify navigation to the Install page', async () => {
    await expect(page).toHaveURL(/\/allure-testops\/install\/$/);
  });
});

// Test #6

test('Should display the Allure TestOps logo on the homepage', async ({ page }) => {
  await allure.description('Ensures that the Allure TestOps logo is displayed on the homepage');
  await allure.epic('Allure TestOps Documentation');
  await allure.feature('Content');
  await allure.story('Logo');
  await allure.tags('Logo', 'UI', 'Visibility');

  await allure.step('Navigate to the Allure TestOps documentation homepage', async () => {
    await page.goto('https://docs.qameta.io/allure-testops/');
  });

  await allure.step('Verify that the logo is visible', async () => {
    const logo = page.locator('img[alt="TestOps logo"]');
    await expect(logo).toBeVisible();
  });
});

// Test #7

test('Should fail when attempting to use Ctrl+K search', async ({ page }) => {
  await allure.description('Simulates a failed attempt to use the keyboard shortcut for search, which is unavailable');
  await allure.epic('Allure TestOps Documentation');
  await allure.feature('Search');
  await allure.story('Shortcut Search');
  await allure.tags('Error', 'Shortcut', 'Search');

  await allure.step('Navigate to the Allure TestOps documentation homepage', async () => {
    await page.goto('https://docs.qameta.io/allure-testops/');
  });

  await allure.step('Press Ctrl+K to open the search input', async () => {
    await page.keyboard.press('Control+KeyK');
  });

  await allure.step('Attempt to fill in the search input with "Jenkins"', async () => {
    await page.fill('input[placeholder="Search"]', 'Jenkins');
  });

  await allure.step('Press Enter to execute the search', async () => {
    await page.keyboard.press('Enter');
  });

  await allure.step('Verify that search results are displayed', async () => {
    await expect(page.locator('h2')).toContainText('Search results');
  });
});

// Test #8

test('Should fail due to an intentionally incorrect URL expectation', async ({ page }) => {
  await allure.description('Tests navigation to the Overview page and verifies an incorrect expected URL to simulate a failure');
  await allure.epic('Allure TestOps Documentation');
  await allure.feature('Navigation');
  await allure.story('Broken Navigation');
  await allure.tags('Error', 'URL');

  await allure.step('Navigate to the Allure TestOps documentation homepage', async () => {
    await page.goto('https://docs.qameta.io/allure-testops/');
  });

  await allure.step('Verify that the page title includes "Allure TestOps"', async () => {
    await expect(page).toHaveTitle(/Allure TestOps/);
  });

  await allure.step('Click the "Overview" link', async () => {
    await page.click('text=Overview');
  });

  await allure.step('Verify that the URL is incorrect (intentionally)', async () => {
    await expect(page).toHaveURL('https://wrong-url.com');
  });
});

// Test #9

test('Should fail when clicking a non-existent navigation link', async ({ page }) => {
  await allure.description('Attempts to click a nonexistent link to simulate broken navigation');
  await allure.epic('Allure TestOps Documentation');
  await allure.feature('Navigation');
  await allure.story('Broken Navigation');
  await allure.tags('Error', 'Link', 'Navigation');

  await allure.step('Navigate to the Allure TestOps documentation homepage', async () => {
    await page.goto('https://docs.qameta.io/allure-testops/');
  });

  await allure.step('Verify that the page title includes "Allure TestOps"', async () => {
    await expect(page).toHaveTitle(/Allure TestOps/);
  });

  await allure.step('Attempt to click the nonexistent "Nonexistent" link', async () => {
    await page.click('text=Nonexistent');
  });

  await allure.step('Verify that a 404 error is displayed', async () => {
    await expect(page.locator('h1')).toContainText('404 Not Found');
  });
});

// Test #10

test('Should randomly pass or fail to simulate flakiness', async ({ page }) => {
  test.flaky();
  await allure.description('Randomly passes or fails based on a generated number to simulate flaky behavior');
  await allure.epic('Allure TestOps Documentation');
  await allure.feature('Stability');
  await allure.story('Flaky Behavior');
  await allure.tags('Flaky');

  await allure.step('Navigate to the Allure TestOps documentation homepage', async () => {
    await page.goto('https://docs.qameta.io/allure-testops/');
  });

  await allure.step('Generate a random number and assert it’s > 0.3', async () => {
    const value = Math.random();
    await expect(value).toBeGreaterThan(0.3);
  });

  await allure.step('Log whether the test passes or fails', async () => {
    const result = Math.random() < 0.5 ? 'PASS' : 'FAIL';
    console.log(`Test result: ${result}`);
  });
});

// Test #11

test.skip('Should be skipped as feature section under development', async ({ page }) => {
  await allure.description('This test is intentionally skipped as the feature is under development');
  await allure.epic('Allure TestOps Documentation');
  await allure.feature('Navigation');
  await allure.story('Skipped Feature Section');
  await allure.tags('Skipped');
});
