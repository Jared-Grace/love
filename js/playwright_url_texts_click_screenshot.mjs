import { number_from_text } from "./number_from_text.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { playwright_test_blank } from "./playwright_test_blank.mjs";
export async function playwright_url_texts_click_screenshot(
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
  "Opens a page at a window of the size asked for, presses the first thing showing each of the texts in turn - texts is one comma-joined word, as every list handed over a command line is - and saves a picture of the whole page after the last press.";
  "It exists for screens that only appear after a press, such as a chooser opened from a button, which a picture of the page as it opens never shows.";
  let wait_ms = 1000;
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
