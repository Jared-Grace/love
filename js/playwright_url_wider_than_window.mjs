import { number_from_text } from "./number_from_text.mjs";
import { playwright_test_blank } from "./playwright_test_blank.mjs";
export async function playwright_url_wider_than_window(url, width) {
  "$plain url";
  "$plain width";
  "Opens a page in a browser with no screen, at the width asked for, and lists the innermost parts that reach past the right edge of the window - the parts that make a reader scroll sideways.";
  "Only the innermost are listed, because every box holding a wide part reaches past the edge too, and naming those would bury the one to fix.";
  let result = null;
  async function on_page(page) {
    let viewport = {
      width: number_from_text(width),
      height: 800,
    };
    await page.setViewportSize(viewport);
    await page.goto(url);
    await page.waitForLoadState("networkidle");
    function wide_find() {
      let edge = document.documentElement.clientWidth;
      let all = [...document.body.querySelectorAll("*")];
      function lambda(e) {
        let r = e.getBoundingClientRect().right > edge + 1;
        return r;
      }
      let wide = all.filter(lambda);
      function lambda3(e) {
        function lambda2(o) {
          let r2 = o !== e && e.contains(o);
          return r2;
        }
        let r3 = !wide.some(lambda2);
        return r3;
      }
      let innermost = wide.filter(lambda3);
      function lambda4(e) {
        let r4 = {
          tag: e.tagName,
          right: Math.round(e.getBoundingClientRect().right),
          text: e.textContent.slice(0, 80),
          parent_text: e.parentElement.textContent.slice(0, 120),
        };
        return r4;
      }
      let r5 = {
        edge,
        page_width: document.documentElement.scrollWidth,
        wide: innermost.map(lambda4),
      };
      return r5;
    }
    result = await page.evaluate(wide_find);
  }
  await playwright_test_blank(on_page);
  return result;
}
