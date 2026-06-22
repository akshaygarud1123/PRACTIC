import { test, expect } from '@playwright/test';

test('navigate to login, sign in, and click blog', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://practicetestautomation.com/practice-test-login/');

  // Wait for the page to load
  await page.waitForLoadState('networkidle');

  // Fill in the username field
  await page.fill('input[name="username"]', 'student');

  // Fill in the password field
  await page.fill('input[name="password"]', 'Password123');

  // Click the Sign in button
  await page.click('button[id="submit"]');

  // Wait for the page to load after sign in
  await page.waitForLoadState('networkidle');

  // Verify sign in was successful by checking the URL
  await expect(page).toHaveURL(/.*logged-in-successfully/);

  // Click on the Blog link
  await page.click('a:has-text("Blog")');

  // Wait for the blog page to load
  await page.waitForLoadState('networkidle');

  // Verify we're on the blog page
  await expect(page).toHaveURL(/.*blog/);
});
