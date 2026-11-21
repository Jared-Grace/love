import { url_opened_unasked_assert } from "./url_opened_unasked_assert.mjs";
import { picture_saved_unasked_assert } from "./picture_saved_unasked_assert.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { playwright_test_blank } from "./playwright_test_blank.mjs";
export async function playwright_url_texts_click_screenshot_load(
  url,
  texts,
  f_path,
  width,
  height,
) {
  "$plain f_path";
  "open a page, press the first thing showing each of the texts in turn, and save a picture of the whole page";
  "waits for the page's load event, never for the network to go quiet: a page holding a spam check widget (Cloudflare Turnstile) keeps asking the network, so a wait for quiet times out on a page that is already showing. Each press waits for its own text to appear, which covers what the page draws after loading";
  url_opened_unasked_assert(url);
  picture_saved_unasked_assert(f_path);
  let wait_ms = 1000;
  async function on_page(page) {
    let viewport = {
      width: number_from_text(width),
      height: number_from_text(height),
    };
    await page.setViewportSize(viewport);
    await page.goto(url);
    await page.waitForLoadState("load");
    let list = text_split_comma(texts);
    for (let text of list) {
      await page.getByText(text).first().click();
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
