import { url_opened_unasked_assert } from "./url_opened_unasked_assert.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { playwright_test_blank } from "./playwright_test_blank.mjs";
export async function playwright_url_texts_click_text_ancestors_styles(
  url,
  texts,
  text,
) {
  "open a page, press the first thing showing each of the texts in turn, then say how the first thing showing the last text and every element above it are drawn - their opacity, background, letter colour, filter and inline style - so a look that shows wrong in a picture can be traced to the element that causes it, without a browser on anyone's screen";
  url_opened_unasked_assert(url);
  let wait_ms = 1000;
  let result = null;
  async function on_page(page) {
    let viewport = {
      width: number_from_text("420"),
      height: number_from_text("800"),
    };
    await page.setViewportSize(viewport);
    await page.goto(url);
    await page.waitForLoadState("networkidle");
    for (let t of text_split_comma(texts)) {
      await page.getByText(t).first().click();
      await page.waitForTimeout(wait_ms);
    }
    function read(e) {
      let rows = [];
      let walk = e;
      while (walk) {
        let s = walk.ownerDocument.defaultView.getComputedStyle(walk);
        rows.push({
          tag: walk.tagName,
          opacity: s.opacity,
          background: s.backgroundColor,
          color: s.color,
          filter: s.filter,
          inline: walk.getAttribute("style"),
        });
        walk = walk.parentElement;
      }
      return rows;
    }
    result = await page.getByText(text).first().evaluate(read);
  }
  await playwright_test_blank(on_page);
  return result;
}
