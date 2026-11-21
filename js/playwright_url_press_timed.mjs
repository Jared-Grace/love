import { arguments_assert } from "./arguments_assert.mjs";
import { url_opened_unasked_assert } from "./url_opened_unasked_assert.mjs";
import { list_add } from "./list_add.mjs";
import { date_now_milliseconds } from "./date_now_milliseconds.mjs";
import { playwright_test_blank } from "./playwright_test_blank.mjs";
export async function playwright_url_press_timed(url, text, count) {
  arguments_assert(arguments, 3);
  url_opened_unasked_assert(url);
  ("How long each press of one button takes to finish drawing, in a headless browser: opens the address, then presses the button whose whole text ends with the given text, count times over, and for each press says how long until the page stopped changing, how much of that the page spent busy rather than waiting, which requests it made, and whether the page loaded itself again - so a slow button says whether it was slow from asking, from working, or from starting over.");
  ("THE END OF A PRESS IS THE PAGE GOING QUIET, not the press returning: a button that redraws after its press has handed back is still drawing. Quiet is half a second with nothing on the page changing.");
  ("BROWSER-SERIALIZED - the code run inside the page is handed over as text, so nothing rewriting this file can reach into it");
  let presses = [];
  async function on_page(page) {
    let requests = [];
    function on_request(request) {
      let body = request.postData() || "";
      list_add(requests, request.url() + " " + body.slice(0, 120));
    }
    page.on("request", on_request);
    ("A page that loaded itself again has lost what was put on it before the press. The browser's own word for a navigation is no use here: it says the same for a page rewriting its address in place, which is most presses in these apps, and it said a reload for every one of them on the first run.");
    async function reloaded_is() {
      try {
        let gone = await page.evaluate(
          "typeof window.__changed === 'undefined'",
        );
        return gone;
      } catch (e) {
        return true;
      }
    }
    await page.goto(url);
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(2000);
    let watch =
      "(function () { window.__changed = performance.now(); window.__busy = 0; if (window.__watching) { return; } window.__watching = true; new MutationObserver(function () { window.__changed = performance.now(); }).observe(document.body, { subtree: true, childList: true, characterData: true, attributes: true }); new PerformanceObserver(function (list) { for (let e of list.getEntries()) { window.__busy += e.duration; } }).observe({ type: 'longtask', buffered: false }); })();";
    let press =
      "(function (wanted) { let found = Array.from(document.querySelectorAll('button')).filter(function (b) { return b.offsetParent !== null && b.innerText.trim().endsWith(wanted); }); if (found.length === 0) { return false; } window.__busy = 0; window.__pressed = performance.now(); window.__changed = performance.now(); found[0].click(); return true; })";
    let index = 0;
    while (index < count) {
      await page.evaluate(watch);
      requests.length = 0;
      let pressed = await page.evaluate(
        press + "(" + JSON.stringify(text) + ")",
      );
      if (!pressed) {
        list_add(presses, {
          pressed: false,
          url: page.url(),
        });
        return;
      }
      let t0 = date_now_milliseconds();
      let reloaded = false;
      while (true) {
        await page.waitForTimeout(100);
        reloaded = await reloaded_is();
        if (reloaded) {
          await page.waitForLoadState("networkidle");
          break;
        }
        let quiet = await page.evaluate("performance.now() - window.__changed");
        if (quiet > 500) {
          break;
        }
      }
      let ms = null;
      let busy_ms = null;
      if (reloaded) {
        ms = date_now_milliseconds() - t0;
      } else {
        ms = await page.evaluate(
          "Math.round(window.__changed - window.__pressed)",
        );
        busy_ms = await page.evaluate("Math.round(window.__busy)");
      }
      list_add(presses, {
        ms,
        busy_ms,
        reloaded,
        url: page.url(),
        requests: requests.slice(),
      });
      index = index + 1;
    }
  }
  await playwright_test_blank(on_page);
  return presses;
}
