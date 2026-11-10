import { less_than } from "./less_than.mjs";
import { url_opened_unasked_assert } from "./url_opened_unasked_assert.mjs";
import { picture_saved_unasked_assert } from "./picture_saved_unasked_assert.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { playwright_happy_answer_selector } from "./playwright_happy_answer_selector.mjs";
import { playwright_happy_answer_wait } from "./playwright_happy_answer_wait.mjs";
import { playwright_happy_step } from "./playwright_happy_step.mjs";
import { property_get } from "./property_get.mjs";
import { playwright_test_blank } from "./playwright_test_blank.mjs";
export async function playwright_url_happy_presses_screenshot(
  url,
  presses,
  f_path,
  width,
  height,
) {
  "$plain url";
  "$plain presses";
  "$plain f_path";
  "$plain width";
  "$plain height";
  "Opens a quiz page at a window of the size asked for, makes this many presses along the way the page marks as right, and saves a picture of the screen after the last of them - partway through a question, where a picture of the page as it opens or once answered never looks.";
  "It exists for a screen that only appears in the middle of answering, on a quiz whose question is random, so the presses cannot be named by their words ahead of time.";
  url_opened_unasked_assert(url);
  picture_saved_unasked_assert(f_path);
  let wait_ms = 2000;
  let count = number_from_text(presses);
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
      await page.waitForTimeout(wait_ms);
    }
    let options = {
      path: f_path,
      fullPage: true,
    };
    await page.screenshot(options);
  }
  await playwright_test_blank(on_page);
}
