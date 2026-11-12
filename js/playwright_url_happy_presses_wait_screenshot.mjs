import { subtract } from "./subtract.mjs";
import { url_opened_unasked_assert } from "./url_opened_unasked_assert.mjs";
import { picture_saved_unasked_assert } from "./picture_saved_unasked_assert.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { playwright_happy_answer_selector } from "./playwright_happy_answer_selector.mjs";
import { less_than } from "./less_than.mjs";
import { playwright_happy_answer_wait } from "./playwright_happy_answer_wait.mjs";
import { playwright_happy_step } from "./playwright_happy_step.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { playwright_test_blank } from "./playwright_test_blank.mjs";
export async function playwright_url_happy_presses_wait_screenshot(
  url,
  presses,
  last_wait_ms,
  f_path,
  width,
  height,
) {
  "$plain url";
  "$plain presses";
  "$plain last_wait_ms";
  "$plain f_path";
  "$plain width";
  "$plain height";
  "Opens a quiz page at a window of the size asked for, makes this many presses along the way the page marks as right, waits this many milliseconds after the last of them, and saves a picture of the screen.";
  "The wait after the last press is what this adds: a flash that lasts half a second, such as the message after a right answer, is over long before the usual two seconds are up, so it could never be pictured.";
  url_opened_unasked_assert(url);
  picture_saved_unasked_assert(f_path);
  let wait_ms = 2000;
  let count = number_from_text(presses);
  let last_wait = number_from_text(last_wait_ms);
  async function on_page(page) {
    let viewport = {
      width: number_from_text(width),
      height: number_from_text(height),
    };
    await page.setViewportSize(viewport);
    await page.goto(url);
    await page.waitForLoadState("networkidle");
    let selector = playwright_happy_answer_selector();
    for (let k = 0; less_than(k, count); k++) {
      await playwright_happy_answer_wait(page, wait_ms);
      let step = await playwright_happy_step(page, selector);
      let none = property_get(step, "none");
      if (none) {
        break;
      }
      let right = subtract(count, 1);
      let last = equal(k, right);
      if (last) {
        await page.waitForTimeout(last_wait);
      } else {
        await page.waitForTimeout(wait_ms);
      }
    }
    let options = {
      path: f_path,
      fullPage: true,
    };
    await page.screenshot(options);
  }
  await playwright_test_blank(on_page);
}
