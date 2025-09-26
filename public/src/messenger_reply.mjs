import { import_install } from "./import_install.mjs";
export async function messenger_reply() {
  const { chromium, firefox, webkit } = await import_install("playwright");
  const browser = await chromium.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto("https://example.com");
  await browser.close();
}
