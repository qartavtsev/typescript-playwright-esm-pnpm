import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';
// Alternative import method:
// Use common Allure utilities for JavaScript integration from 'allure-js-commons' if 'allure-playwright' is not used
// import * as allure from 'allure-js-commons';

// Test #1

test('Should display the Allure TestOps logo on the homepage', async ({ page }) => {
  await allure.description('Ensures that the Allure TestOps logo is displayed on the documentation homepage');
  await allure.epic('Allure TestOps Documentation');
  await allure.feature('Content');
  await allure.story('Logo');
  await allure.tags('Logo', 'Homepage', 'UI');

  await allure.step('Navigate to the Allure TestOps documentation homepage', async () => {
    await page.goto('https://docs.qameta.io/allure-testops/');
  });

  await allure.step('Verify that the Allure TestOps logo is visible', async () => {
    const logo = page.locator('img[alt="TestOps logo"]');
    await expect(logo).toBeVisible();
  });
});

// Test #2

test('Should display correct header on the homepage', async ({ page }) => {
  await allure.description('Ensures the documentation homepage has the correct main heading');
  await allure.epic('Allure TestOps Documentation');
  await allure.feature('Content');
  await allure.story('Page Header');
  await allure.tags('Homepage', 'UI');

  await allure.step('Navigate to the Allure TestOps documentation homepage', async () => {
    await page.goto('https://docs.qameta.io/allure-testops/');
  });

  await allure.step('Verify that the page header includes "Allure TestOps"', async () => {
    await expect(page.locator('h1')).toContainText('Allure TestOps');
  });
});

// Test #3A - test uses 'allure.step' wrappers for steps

test('Should display correct title on the homepage - using allure.step() wrappers', async ({ page }) => {
  await allure.description('Ensures the documentation homepage has the correct title');
  await allure.epic('Allure TestOps Documentation');
  await allure.feature('Content');
  await allure.story('Page Title');
  await allure.tags('Homepage', 'UI');

  await allure.step('Navigate to the Allure TestOps documentation homepage', async () => {
    await page.goto('https://docs.qameta.io/allure-testops/');
  });

  await allure.step('Verify that the page title includes "Allure TestOps"', async () => {
    await expect(page).toHaveTitle(/Allure TestOps/);
  });
});

// Test #3B - test uses 'test.step' wrappers for steps

test('Should display correct title on the homepage - using test.step() wrappers', async ({ page }) => {
  await allure.description('Ensures the documentation homepage has the correct title');
  await allure.epic('Allure TestOps Documentation');
  await allure.feature('Content');
  await allure.story('Page Title');
  await allure.tags('Homepage', 'UI');

  await test.step('Navigate to the Allure TestOps documentation homepage', async () => {
    await page.goto('https://docs.qameta.io/allure-testops/');
  });

  await test.step('Verify that the page title includes "Allure TestOps"', async () => {
    await expect(page).toHaveTitle(/Allure TestOps/);
  });
});

// Test #3C - test has no 'test.step' or 'allure.step' wrappers for steps

test('Should display correct title on the homepage - without using step wrappers', async ({ page }) => {
  await allure.description('Ensures the documentation homepage has the correct title');
  await allure.epic('Allure TestOps Documentation');
  await allure.feature('Content');
  await allure.story('Page Title');
  await allure.tags('Homepage', 'UI');

  await page.goto('https://docs.qameta.io/allure-testops/');

  await expect(page).toHaveTitle(/Allure TestOps/);
});

// Test #4

test('Should navigate to the Release notes page via the sidebar link', async ({ page }) => {
  await allure.description('Validates the navigation to the Release notes page via the sidebar link');
  await allure.epic('Allure TestOps Documentation');
  await allure.feature('Navigation');
  await allure.story('Sections');
  await allure.tags('Section', 'Navigation', 'UI');

  await allure.step('Navigate to the Allure TestOps documentation homepage', async () => {
    await page.goto('https://docs.qameta.io/allure-testops/');
  });

  await allure.step('Click the "Release notes" link on the sidebar', async () => {
    await page.click('text=Release notes');
  });

  await allure.step('Verify that the URL includes "release-notes"', async () => {
    await expect(page).toHaveURL(/.*release-notes/);
  });

  await allure.step('Verify that the page header is "Release Notes"', async () => {
    await expect(page.locator('h1')).toContainText('Release Notes');
  });
});

// Test #5

test('Should navigate to the FAQ page via the sidebar link', async ({ page }) => {
  await allure.description('Validates the navigation to the FAQ page via the sidebar link');
  await allure.epic('Allure TestOps Documentation');
  await allure.feature('Navigation');
  await allure.story('Sections');
  await allure.tags('Section', 'Navigation', 'UI');

  await allure.step('Navigate to the Allure TestOps documentation homepage', async () => {
    await page.goto('https://docs.qameta.io/allure-testops/');
  });

  await allure.step('Click the "FAQ" link on the sidebar', async () => {
    await page.click('text=FAQ');
  });

  await allure.step('Verify that the URL includes "faq"', async () => {
    await expect(page).toHaveURL(/.*faq/);
  });

  await allure.step('Verify that the page header is "Frequently Asked Questions"', async () => {
    await expect(page.locator('h1')).toContainText('Frequently Asked Questions');
  });
});

// Test #6

test('Should navigate to the Architecture page via the sidebar link', async ({ page }) => {
  await allure.description('Validates the navigation to the Architecture page via the sidebar link');
  await allure.epic('Allure TestOps Documentation');
  await allure.feature('Navigation');
  await allure.story('Sections');
  await allure.tags('Section', 'Navigation', 'UI');

  await allure.step('Navigate to the Allure TestOps documentation homepage', async () => {
    await page.goto('https://docs.qameta.io/allure-testops/');
  });

  await allure.step('Click the "Architecture" link on the sidebar', async () => {
    await page.click('text=Architecture');
  });

  await allure.step('Verify that the URL includes "architecture"', async () => {
    await expect(page).toHaveURL(/.*architecture/);
  });

  await allure.step('Verify that the page header is "Allure TestOps architecture"', async () => {
    await expect(page.locator('h1')).toContainText('Allure TestOps architecture');
  });
});

// Test #7

test.skip('Should navigate to the Features page via the sidebar link', async ({ page }) => {
  await allure.description('Validates the navigation to the Features page via the sidebar link. This should be skipped as the Features section is under development');
  await allure.epic('Allure TestOps Documentation');
  await allure.feature('Navigation');
  await allure.story('Sections');
  await allure.tags('Section', 'Navigation', 'UI');

  await allure.step('Navigate to the Allure TestOps documentation homepage', async () => {
    await page.goto('https://docs.qameta.io/allure-testops/');
  });

  await allure.step('Click the "Features" link on the sidebar', async () => {
    await page.click('text=Features');
  });

  await allure.step('Verify that the URL includes "features"', async () => {
    await expect(page).toHaveURL(/.*features/);
  });

  await allure.step('Verify that the page header is "Allure TestOps features"', async () => {
    await expect(page.locator('h1')).toContainText('Allure TestOps features');
  });
});








// Test #7

test('Should navigate to the Install page via the "to deploy Allure TestOps" link', async ({ page }) => {
  await allure.description('Validates the navigation to the Install page via the "to deploy Allure TestOps" link');
  await allure.epic('Allure TestOps Documentation');
  await allure.feature('Navigation');
  await allure.story('Sections');
  await allure.tags('Section', 'Navigation', 'UI');

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

  await allure.step('Verify that the URL includes "install"', async () => {
    await expect(page).toHaveURL(/.*install/);
  });

  await allure.step('Verify that the page header is "Install Allure TestOps"', async () => {
    await expect(page.locator('h1')).toContainText('Install Allure TestOps');
  });
});

// Test #8

test('Should display the sidebar and the Getting started section', async ({ page }) => {
  await allure.description('Verifies that the sidebar and the Getting started section are visible');
  await allure.epic('Allure TestOps Documentation');
  await allure.feature('Navigation');
  await allure.story('Sidebar');
  await allure.tags('Sidebar', 'Navigation', 'UI');

  await allure.step('Navigate to the Allure TestOps documentation homepage', async () => {
    await page.goto('https://docs.qameta.io/allure-testops/');
  });

  await allure.step('Verify that the sidebar is visible', async () => {
    await expect(page.locator('nav')).toBeVisible();
  });

  await allure.step('Verify that the sidebar contains "Getting started"', async () => {
    await expect(page.locator('nav')).toContainText('Getting started');
  });

  await allure.step('Verify that the sidebar contains "Create a project"', async () => {
    await expect(page.locator('nav')).toContainText('Create a project');
  });

  await allure.step('Verify that the sidebar contains "Run a manual test case"', async () => {
    await expect(page.locator('nav')).toContainText('Run a manual test case');
  });

  await allure.step('Verify that the sidebar contains "Run an automated test case"', async () => {
    await expect(page.locator('nav')).toContainText('Run an automated test case');
  });

  await allure.step('Verify that the sidebar contains "Create a combined launch"', async () => {
    await expect(page.locator('nav')).toContainText('Create a combined launch');
  });

  await allure.step('Verify that the sidebar contains "Work with test results"', async () => {
    await expect(page.locator('nav')).toContainText('Work with test results');
  });
});





// Test #9

test('Should fail due to an incorrect URL', async ({ page }) => {
  await allure.description('Tests navigation to the Overview page and verifies an incorrect expected URL to simulate a failure');
  await allure.epic('Allure TestOps Documentation');
  await allure.feature('Navigation');
  await allure.story('URL Navigation');
  await allure.tags('Error', 'URL', 'Navigation');

  await allure.step('Navigate to the Allure TestOps documentation homepage', async () => {
    await page.goto('https://docs.qameta.io/allure-testops/');
  });

  await allure.step('Click the "Overview" link on the sidebar', async () => {
    await page.click('text=Overview');
  });

  await allure.step('Verify that the URL is incorrect', async () => {
    await expect(page).toHaveURL('https://intentionally-incorrect-url.com');
  });
});

// Test #10

test('Should fail when clicking a non-existent navigation link', async ({ page }) => {
  await allure.description('Attempts to click a nonexistent link to simulate broken navigation');
  await allure.epic('Allure TestOps Documentation');
  await allure.feature('Navigation');
  await allure.story('URL Navigation');
  await allure.tags('Error', 'URL', 'Navigation');

  await allure.step('Navigate to the Allure TestOps documentation homepage', async () => {
    await page.goto('https://docs.qameta.io/allure-testops/');
  });

  await allure.step('Attempt to click the nonexistent "Nonexistent" link', async () => {
    await page.click('text=Nonexistent');
  });

  await allure.step('Verify that a 404 error is displayed', async () => {
    await expect(page.locator('h1')).toContainText('404 Not Found');
  });
});

// Test #11

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

  await allure.step('Fill in the search input with "Jenkins"', async () => {
    await page.fill('input[placeholder="Search"]', 'Jenkins');
  });

  await allure.step('Press Enter to execute the search', async () => {
    await page.keyboard.press('Enter');
  });

  await allure.step('Verify that search results are displayed', async () => {
    await expect(page.locator('h1')).toContainText('Search results');
  });
});

// Test #12

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

// Test #13

test('Should randomly pass or fail to simulate flakiness - true', async ({ page }) => {
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
