import { fn_name } from "./fn_name.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { playwright_happy_answer_wait } from "./playwright_happy_answer_wait.mjs";
import { playwright_quiz_correct_count } from "./playwright_quiz_correct_count.mjs";
import { playwright_happy_answer_selector } from "./playwright_happy_answer_selector.mjs";
import { playwright_happy_step } from "./playwright_happy_step.mjs";
import { property_get } from "./property_get.mjs";
import { playwright_happy_answered_wait } from "./playwright_happy_answered_wait.mjs";
import { html_wider_than_window_script } from "./html_wider_than_window_script.mjs";
import { playwright_test_blank } from "./playwright_test_blank.mjs";
export async function playwright_url_answer_screenshot(
  url,
  f_path,
  width,
  height,
) {
  "$plain url";
  "$plain f_path";
  "$plain width";
  "$plain height";
  "Opens a quiz page at a window of the size asked for, answers its question right by pressing the controls the page marks as right, and saves a picture of the screen the moment the answer is taken - the success showing - along with how wide the page became.";
  "It exists for faults that only appear after answering. A picture of a page as it opens never shows them, because nothing on that screen has been pressed yet.";
  ("The width travels out as numbers as well as a picture, so the fault can be found without reading the picture: what the page measured is the one search every width check here asks, ",
    fn_name("html_wider_than_window_script"),
    ".");
  ("BROWSER-SERIALIZED - do NOT auto-canonicalize");
  let presses_max = 40;
  let wait_ms = 2000;
  let result = null;
  async function on_page(page) {
    let viewport = {
      width: number_from_text(width),
      height: number_from_text(height),
    };
    await page.setViewportSize(viewport);
    await page.goto(url);
    await page.waitForLoadState("networkidle");
    await playwright_happy_answer_wait(page, wait_ms);
    let count_before = await playwright_quiz_correct_count(page);
    let selector = playwright_happy_answer_selector();
    let presses = 0;
    let count = count_before;
    while (count === count_before && presses < presses_max) {
      let step = await playwright_happy_step(page, selector);
      let none = property_get(step, "none");
      if (none) {
        break;
      }
      presses = presses + 1;
      let url_before = page.url();
      count = await playwright_happy_answered_wait(
        page,
        count_before,
        url_before,
        wait_ms,
      );
    }
    let options = {
      path: f_path,
      fullPage: true,
    };
    await page.screenshot(options);
    let script = html_wider_than_window_script();
    let measured = await page.evaluate(script);
    result = {
      presses,
      answered: count !== count_before,
      measured,
    };
  }
  await playwright_test_blank(on_page);
  return result;
}
