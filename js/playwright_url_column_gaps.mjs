import { url_opened_unasked_assert } from "./url_opened_unasked_assert.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { playwright_test_blank } from "./playwright_test_blank.mjs";
export async function playwright_url_column_gaps(url, width, height) {
  "for every element on the page laid out as a column with a gap of its own, the gap the browser gives it and where each of its first children sits - so a gap that is written but not shown can be told from one that is shown";
  url_opened_unasked_assert(url);
  let columns = null;
  async function on_page(page) {
    let viewport = {
      width: number_from_text(width),
      height: number_from_text(height),
    };
    await page.setViewportSize(viewport);
    await page.goto(url);
    await page.waitForLoadState("networkidle");
    function measure() {
      let found = [];
      for (let element of document.querySelectorAll("div")) {
        if (element.style.gap === "") {
          continue;
        }
        let style = getComputedStyle(element);
        let children = [];
        for (let child of Array.from(element.children).slice(0, 6)) {
          let rect = child.getBoundingClientRect();
          children.push({
            text: child.textContent.slice(0, 30),
            top: Math.round(rect.top),
            bottom: Math.round(rect.bottom),
            display: getComputedStyle(child).display,
          });
        }
        found.push({
          gap: style.gap,
          display: style.display,
          direction: style.flexDirection,
          children,
        });
        if (found.length >= 4) {
          break;
        }
      }
      return found;
    }
    columns = await page.evaluate(measure);
  }
  await playwright_test_blank(on_page);
  return columns;
}
