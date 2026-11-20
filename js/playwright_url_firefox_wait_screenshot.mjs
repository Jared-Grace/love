import { playwright_firefox } from "./playwright_firefox.mjs";
export async function playwright_url_firefox_wait_screenshot(
  url,
  wait_text,
  f_path,
) {
  "$plain url";
  "$plain wait_text";
  "$plain f_path";
  "Opens a page in a headless Firefox at a phone's width, waits until the text named is showing, and saves a picture of the page. Measured 2026-11-20, a page that wrapped in Chrome ran off the edge on a phone running Firefox, and a page that hides what sticks out reports no overflow at all - only a picture shows it.";
  let launcher = await playwright_firefox();
  let engine = await launcher.launch({
    headless: true,
  });
  try {
    let page = await engine.newPage();
    await page.setViewportSize({
      width: 420,
      height: 900,
    });
    await page.goto(url);
    let awaited = page
      .getByText(wait_text, {
        exact: true,
      })
      .locator("visible=true");
    await awaited.first().waitFor();
    await page.waitForTimeout(500);
    await page.screenshot({
      path: f_path,
    });
  } finally {
    await engine.close();
  }
}
