import { less_than } from "./less_than.mjs";
import { page_boot_wait_ms } from "./page_boot_wait_ms.mjs";
import { page_boot_poll_ms } from "./page_boot_poll_ms.mjs";
import { page_drawn_text } from "./page_drawn_text.mjs";
import { page_boot_reasons } from "./page_boot_reasons.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export async function page_boot_arrive_wait(page) {
  "waits until the page in front of the browser has drawn something other than nothing or the loading message, or until the boot wait runs out, and answers what it drew last. the caller judges it; this only waits.";
  let deadline = page_boot_wait_ms();
  let step = page_boot_poll_ms();
  let waited = 0;
  let body_text = "";
  while (less_than(waited, deadline)) {
    await page.waitForTimeout(step);
    waited = waited + step;
    body_text = await page_drawn_text(page);
    let reasons = page_boot_reasons(body_text, []);
    let arrived = list_empty_is(reasons);
    if (arrived) {
      break;
    }
  }
  return body_text;
}
