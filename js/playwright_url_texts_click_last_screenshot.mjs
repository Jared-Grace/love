import { fn_name } from "./fn_name.mjs";
import { url_opened_unasked_assert } from "./url_opened_unasked_assert.mjs";
import { picture_saved_unasked_assert } from "./picture_saved_unasked_assert.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { playwright_test_blank } from "./playwright_test_blank.mjs";
export async function playwright_url_texts_click_last_screenshot(
  url,
  texts,
  f_path,
  width,
  height,
) {
  "$plain url";
  "$plain texts";
  "$plain f_path";
  "$plain width";
  "$plain height";
  "Opens a page at a window of the size asked for, presses the last thing showing each of the texts in turn - texts is one comma-joined word - and saves a picture of the whole page after the last press.";
  ("2026-11-15: the twin of ",
    fn_name("playwright_url_texts_click_screenshot"),
    " pressing the last match rather than the first, for a page whose text stands twice, as a learn_js lesson writes its code once above and again in the example that guides, the one that can be pressed.");
  url_opened_unasked_assert(url);
  picture_saved_unasked_assert(f_path);
  let wait_ms = 2500;
  async function on_page(page) {
    let viewport = {
      width: number_from_text(width),
      height: number_from_text(height),
    };
    await page.setViewportSize(viewport);
    await page.goto(url);
    await page.waitForLoadState("networkidle");
    let list = text_split_comma(texts);
    for (let text of list) {
      await page.getByText(text).last().click();
      await page.waitForTimeout(wait_ms);
    }
    let options = {
      path: f_path,
      fullPage: true,
    };
    await page.screenshot(options);
  }
  await playwright_test_blank(on_page);
}
