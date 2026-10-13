import { playwright_test_blank } from "./playwright_test_blank.mjs";
export async function playwright_url_presses_wait_screenshot(
  url,
  texts_comma,
  wait_text,
  f_path,
) {
  "$plain url";
  "$plain texts_comma";
  "$plain wait_text";
  "$plain f_path";
  "Opens a page at a phone's width, presses the first showing thing whose whole text is each of these in turn, waits until the text named last is showing, and only then saves a picture of the page.";
  "The wait is what this adds. A press that opens a screen which has to fetch something first was being pictured mid-fetch, and a wait made by pressing something harmless kept finding a button that was not harmless.";
  "The texts arrive as one word with commas between them, the way a command line hands a list over.";
  let texts = texts_comma.split(",");
  async function on_page(page) {
    await page.setViewportSize({
      width: 420,
      height: 900,
    });
    await page.goto(url);
    await page.waitForLoadState("networkidle");
    for (let text of texts) {
      let showing = page
        .getByText(text, {
          exact: true,
        })
        .locator("visible=true");
      await showing.first().click();
    }
    let awaited = page
      .getByText(wait_text, {
        exact: true,
      })
      .locator("visible=true");
    await awaited.first().waitFor();
    await page.waitForTimeout(500);
    await page.screenshot({
      path: f_path,
      fullPage: true,
    });
  }
  await playwright_test_blank(on_page);
}
