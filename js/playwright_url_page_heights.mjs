import { url_opened_unasked_assert } from "./url_opened_unasked_assert.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { playwright_test_blank } from "./playwright_test_blank.mjs";
export async function playwright_url_page_heights(url, width, height) {
  "$plain url";
  "$plain width";
  "$plain height";
  "Opens a page in a browser with no screen, at a window of the size asked for, and hands back how tall the page is against how tall the window is, with the body's margins - so a page that scrolls with nothing to scroll to can be told apart from one that is simply long.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  url_opened_unasked_assert(url);
  let heights = null;
  async function on_page(page) {
    let viewport = {
      width: number_from_text(width),
      height: number_from_text(height),
    };
    await page.setViewportSize(viewport);
    await page.goto(url);
    await page.waitForLoadState("networkidle");
    function measure() {
      let style = getComputedStyle(document.body);
      let measured = {
        page: document.documentElement.scrollHeight,
        window: window.innerHeight,
        body: document.body.scrollHeight,
        margin_top: style.marginTop,
        margin_bottom: style.marginBottom,
      };
      return measured;
    }
    heights = await page.evaluate(measure);
  }
  await playwright_test_blank(on_page);
  return heights;
}
