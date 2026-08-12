import { playwright_test_blank } from "./playwright_test_blank.mjs";
import { page_boot_wait_ms } from "./page_boot_wait_ms.mjs";
import { page_boot_poll_ms } from "./page_boot_poll_ms.mjs";
import { page_boot_reasons } from "./page_boot_reasons.mjs";
import { catch_error_text_or_null_async } from "./catch_error_text_or_null_async.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_add } from "./list_add.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
import { less_than } from "./less_than.mjs";
import { add } from "./add.mjs";
export async function page_boot_cold_capture(url) {
  "open one page the way a stranger opens it - a browser that has never been here, no hash after the address, nothing remembered - and hand back what it threw on the way in and what it had drawn once it stopped changing.";
  "COLD is the whole point and it is why a browser is launched for each page rather than one browser walking them all. every dev page is served from the same host, so they share one origin and therefore one localStorage: a page walked second would be reading whatever the page before it wrote, which is the opposite of the arrival being tested. a fresh browser costs about a second and buys a guarantee that no ordering of the sweep can change its answer.";
  "it takes a BLANK browser and does its own navigating, for two reasons. the listener for what a page throws has to be hung before the address is opened, and a harness that navigates for you has already opened it by the time it hands the page over. and the waiting wants to be for the page's own markup rather than for every last picture and font on it: a heavy app took longer than the harness's own patience just to fetch its trimmings, and the sweep died on it - having by then already drawn the screen perfectly.";
  "it WAITS FOR THE PAGE rather than for a clock. a fixed pause has to be wrong in one of two directions - too short and a healthy page that was still fetching is called dead, too long and every page in the sweep is paid for at the speed of the slowest. the first of those is not a theory: a fixed pause of a tenth of this deadline reported six working apps as having drawn nothing. so it looks every so often and stops the moment there is something on the screen, and the deadline is only ever reached by a page that truly never arrives.";
  "a page that will not open at all is RECORDED rather than thrown, because that is the very thing this is looking for. letting it throw killed a sweep of twenty-six apps on the fourteenth and reported nothing about the thirteen that had already passed.";
  let errors = [];
  let body_text = "";
  async function on_page(page) {
    function on_error(e) {
      let error_text = String(e);
      list_add(errors, error_text);
    }
    page.on("pageerror", on_error);
    async function go() {
      await page.goto("about:blank");
      await page.goto(url, {
        waitUntil: "domcontentloaded",
      });
    }
    let failed = await catch_error_text_or_null_async(go);
    let opened = null_is(failed);
    if (not(opened)) {
      list_add(errors, failed);
      return;
    }
    let deadline = page_boot_wait_ms();
    let step = page_boot_poll_ms();
    let waited = 0;
    while (less_than(waited, deadline)) {
      await page.waitForTimeout(step);
      waited = add(waited, step);
      body_text = await page.innerText("body");
      let reasons = page_boot_reasons(body_text, []);
      let arrived = list_empty_is(reasons);
      if (arrived) {
        return;
      }
    }
  }
  await playwright_test_blank(on_page);
  let capture = {
    errors,
    body_text,
  };
  return capture;
}
