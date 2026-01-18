const { test, expect } = require('@playwright/test');

test('basic test - page navigation', async ({ page }) => {
  // Navigate to a data URL
  await page.goto('data:text/html,<h1>Hello Playwright</h1>');
  
  // Check that the heading is visible
  const heading = page.locator('h1');
  await expect(heading).toBeVisible();
  await expect(heading).toHaveText('Hello Playwright');
});

test('basic test - page interaction', async ({ page }) => {
  // Navigate to a simple HTML page with a button
  await page.goto('data:text/html,<button id="btn">Click me</button><div id="result"></div><script>document.getElementById("btn").onclick = () => document.getElementById("result").innerText = "Clicked!";</script>');

  // Click the button
  await page.click('#btn');

  // Verify the result
  await expect(page.locator('#result')).toHaveText('Clicked!');
});

test('basic test - form input', async ({ page }) => {
  // Navigate to a page with a form
  await page.goto('data:text/html,<input id="name" type="text" /><p id="output"></p><script>document.getElementById("name").oninput = (e) => document.getElementById("output").innerText = "Hello, " + e.target.value;</script>');

  // Fill the input
  await page.fill('#name', 'World');

  // Verify the output
  await expect(page.locator('#output')).toHaveText('Hello, World');
});
