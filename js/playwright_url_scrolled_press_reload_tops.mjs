import { html_scroll_body_attribute_name } from "./html_scroll_body_attribute_name.mjs";
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
  "What is scrolled and read is the box the page scrolls inside when it has one, and the page itself when it has none. The first run of this read the page alone and answered nothing three times over, on a page that was scrolling inside a box the whole time.";
  "The press is made from inside the page and not by the browser's own hand, because that hand first scrolls the thing into view, and then the distance measured afterwards would be its doing.";
  "The distance arrives from a command line as writing, so it is made a number here.";
  let tops = {};
  let asked = {
    name: html_scroll_body_attribute_name(),
    top: Number(scroll_top),
  };
  function read(given) {
    let box = document.querySelector("[" + given.name + "]");
    if (box === null) {
      let r = window.scrollY;
      return r;
    }
    let r2 = box.scrollTop;
    return r2;
  }
  function scroll(given) {
    let box = document.querySelector("[" + given.name + "]");
    if (box === null) {
      window.scrollTo(0, given.top);
      return;
    }
    box.scrollTop = given.top;
  }
  function press(element) {
    element.click();
  }
  async function on_page(page) {
    await page.goto(url);
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(3000);
    await page.evaluate(scroll, asked);
    await page.waitForTimeout(1000);
    tops.scrolled = await page.evaluate(read, asked);
    await page.getByText(text).first().evaluate(press);
    await page.waitForTimeout(3000);
    tops.pressed = await page.evaluate(read, asked);
    await page.reload();
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(3000);
    tops.reloaded = await page.evaluate(read, asked);
  }
  await playwright_test_blank(on_page);
  return tops;
}
