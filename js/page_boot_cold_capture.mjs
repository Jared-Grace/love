import { playwright_test_url } from "./playwright_test_url.mjs";
import { page_boot_wait_ms } from "./page_boot_wait_ms.mjs";
import { page_boot_poll_ms } from "./page_boot_poll_ms.mjs";
import { page_boot_reasons } from "./page_boot_reasons.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_add } from "./list_add.mjs";
import { less_than } from "./less_than.mjs";
import { add } from "./add.mjs";
export async function page_boot_cold_capture(url) {
  "open one page the way a stranger opens it - a browser that has never been here, no hash after the address, nothing remembered - and hand back what it threw while opening and what it had drawn once it stopped changing.";
  "COLD is the whole point and it is why a browser is launched for each page rather than one browser walking them all. every dev page is served from the same host, so they share one origin and therefore one localStorage: a page walked second would be reading whatever the page before it wrote, which is the opposite of the arrival being tested. a fresh browser costs about a second and buys a guarantee that no ordering of the sweep can change its answer.";
  "the listener has to be hung BEFORE the address is opened, and the harness has already opened it by the time it hands the page over - so the page is sent to a blank one and then to the address again, and everything the opening throws is heard. going away to blank first is also what makes the page be built afresh rather than reused.";
  "it WAITS FOR THE PAGE rather than for a clock. a fixed pause has to be wrong in one of two directions - too short and a healthy page that was still fetching is called dead, too long and every page in the sweep is paid for at the speed of the slowest. the first of those is not a theory: a fixed pause of a tenth of this deadline reported six working apps as having drawn nothing. so it looks every so often and stops the moment there is something on the screen, and the deadline is only ever reached by a page that truly never arrives.";
  let errors = [];
  let body_text = "";
  async function on_page(page) {
    function on_error(e) {
      let error_text = String(e);
      list_add(errors, error_text);
    }
    page.on("pageerror", on_error);
    await page.goto("about:blank");
    await page.goto(url);
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
  await playwright_test_url(url, on_page);
  let capture = {
    errors,
    body_text,
  };
  return capture;
}
