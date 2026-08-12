import { playwright_test_url } from "./playwright_test_url.mjs";
import { page_settle_ms } from "./page_settle_ms.mjs";
import { list_add } from "./list_add.mjs";
export async function page_boot_cold_capture(url) {
  "open one page the way a stranger opens it - a browser that has never been here, no hash after the address, nothing remembered - and hand back what it threw while opening and what it had drawn once it settled.";
  "COLD is the whole point and it is why a browser is launched for each page rather than one browser walking them all. every dev page is served from the same host, so they share one origin and therefore one localStorage: a page walked second would be reading whatever the page before it wrote, which is the opposite of the arrival being tested. a fresh browser costs about a second and buys a guarantee that no ordering of the sweep can change its answer.";
  "the listener has to be hung BEFORE the address is opened, and playwright_test_url has already opened it by the time it hands the page over - so the page is sent to a blank one and then to the address again, and everything the opening throws is heard. going away to blank first is also what makes the page be built afresh rather than reused, the same thing the game's phone sweep does between screens.";
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
    let settle = page_settle_ms();
    await page.waitForTimeout(settle);
    body_text = await page.innerText("body");
  }
  await playwright_test_url(url, on_page);
  let capture = {
    errors,
    body_text,
  };
  return capture;
}
