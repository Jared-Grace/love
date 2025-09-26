export async function messenger_reply() {
  const { chromium, firefox, webkit } = await import("playwright");
  const browser = await chromium.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto("https://example.com");
  await browser.close();
}
