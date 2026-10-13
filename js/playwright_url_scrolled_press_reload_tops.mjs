import { playwright_test_blank } from "./playwright_test_blank.mjs";
export async function playwright_url_scrolled_press_reload_tops(
  url,
  scroll_top,
  text,
) {
  "$plain url";
  "$plain scroll_top";
  "$plain text";
  "Opens a page, scrolls it this far down, presses the first thing showing this text, then loads the page again - and hands back how far down the page stood after each of the three, so a page that throws its reader to the top on a press or on a reload is caught by a number rather than by somebody's thumb.";
  "The press is made from inside the page and not by the browser's own hand, because that hand first scrolls the thing into view, and then the distance measured afterwards would be its doing.";
  "The distance arrives from a command line as writing, so it is made a number here.";
  let tops = {};
  let top = Number(scroll_top);
  async function top_read(page) {
    function read() {
      let r = window.scrollY;
      return r;
    }
    let y = await page.evaluate(read);
    return y;
  }
  async function on_page(page) {
    await page.goto(url);
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(3000);
    function scroll(to) {
      window.scrollTo(0, to);
    }
    await page.evaluate(scroll, top);
    await page.waitForTimeout(1000);
    tops.scrolled = await top_read(page);
    function press(element) {
      element.click();
    }
    await page.getByText(text).first().evaluate(press);
    await page.waitForTimeout(3000);
    tops.pressed = await top_read(page);
    await page.reload();
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(3000);
    tops.reloaded = await top_read(page);
  }
  await playwright_test_blank(on_page);
  return tops;
}
