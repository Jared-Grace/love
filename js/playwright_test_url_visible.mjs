import { playwright_chromium_visible } from "./playwright_chromium_visible.mjs";
export async function playwright_test_url_visible(url, lambda) {
  "headed sibling of playwright_test_url: a real visible window so a human can watch, for single-goal debugging and the visual smoke play-through";
  let browser = await playwright_chromium_visible();
  try {
    let page = await browser.newPage();
    await page.goto(url);
    await lambda(page);
  } finally {
    await browser.close();
  }
}
