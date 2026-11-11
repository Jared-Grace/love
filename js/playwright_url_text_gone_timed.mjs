import { date_now_milliseconds } from "./date_now_milliseconds.mjs";
import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { url_opened_unasked_assert } from "./url_opened_unasked_assert.mjs";
import { list_add } from "./list_add.mjs";
import { playwright_test_blank } from "./playwright_test_blank.mjs";
export async function playwright_url_text_gone_timed(url, text) {
  arguments_assert(arguments, 2);
  url_opened_unasked_assert(url);
  ("How long one address takes to finish opening in a headless browser, read as the moment the page stops showing a given text - a page's own word for still working, such as Reading... - together with how long each request it made took, so a slow page says which of its asks was slow rather than only that it was.");
  ("★ THE END IS THE TEXT GOING AWAY, NOT THE BROWSER'S OWN LOAD EVENT, because a page that asks the machine for its content after loading has fired that event long before anything a reader came for is on the screen. Measured on the reply rules screen, whose three asks all happen after the load event.");
  ("A request sent with a body names what it asked for by that body, since every ask to the machine goes to the same address and differs only by the function named inside it.");
  let requests = [];
  let total = null;
  async function on_page(page) {
    let started = new Map();
    let t0 = date_now_milliseconds();
    function on_request(request) {
      let now = date_now_milliseconds();
      started.set(request, now);
    }
    function on_finished(request) {
      let begun = started.get(request);
      let body = request.postData() || "";
      let asked = request.url() + " " + body.slice(0, 120);
      let left = date_now_milliseconds();
      list_add(requests, {
        asked,
        start_ms: subtract(begun, t0),
        ms: subtract(left, begun),
      });
    }
    page.on("request", on_request);
    page.on("requestfinished", on_finished);
    page.on("requestfailed", on_finished);
    await page.goto(url);
    let shown = await page.innerText("body");
    while (shown.includes(text)) {
      await page.waitForTimeout(100);
      shown = await page.innerText("body");
    }
    let left2 = date_now_milliseconds();
    total = subtract(left2, t0);
  }
  await playwright_test_blank(on_page);
  function slow_first(a, b) {
    let difference = subtract(b.ms, a.ms);
    return difference;
  }
  requests.sort(slow_first);
  let timed = {
    url,
    total_ms: total,
    requests,
  };
  return timed;
}
