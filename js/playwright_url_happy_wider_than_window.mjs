import { playwright_quiz_correct_count } from "./playwright_quiz_correct_count.mjs";
import { playwright_happy_onward_selector } from "./playwright_happy_onward_selector.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { playwright_happy_answer_selector } from "./playwright_happy_answer_selector.mjs";
import { html_wider_than_window_script } from "./html_wider_than_window_script.mjs";
import { playwright_happy_step } from "./playwright_happy_step.mjs";
import { playwright_test_blank } from "./playwright_test_blank.mjs";
export async function playwright_url_happy_wider_than_window(
  url,
  width,
  steps,
) {
  "$plain url";
  "$plain width";
  "$plain steps";
  "Opens a page at the width asked for and walks it the way somebody getting everything right does, for at most the number of steps asked for, and after every step lists the parts reaching past the right edge of the window - so a screen that scrolls sideways only after some answers is found too.";
  "Only the steps where something sticks out are handed back, each with the address it was at.";
  let found = [];
  let walked = 0;
  async function on_page(page) {
    let viewport = {
      width: number_from_text(width),
      height: 800,
    };
    await page.setViewportSize(viewport);
    await page.goto(url);
    await page.waitForLoadState("networkidle");
    let selector = playwright_happy_answer_selector();
    let onward = playwright_happy_onward_selector();
    let count = number_from_text(steps);
    let right_before = await playwright_quiz_correct_count(page);
    for (let i = 0; i < count; i++) {
      let script = html_wider_than_window_script();
      let measured = await page.evaluate(script);
      if (measured.wide.length > 0) {
        found.push({
          step: i,
          url: page.url(),
          measured,
        });
      }
      let right = await playwright_quiz_correct_count(page);
      let wanted = selector;
      if (right > right_before) {
        wanted = onward;
      }
      right_before = right;
      let step = await playwright_happy_step(page, wanted);
      if (step.none) {
        let other = wanted === onward ? selector : onward;
        step = await playwright_happy_step(page, other);
      }
      if (step.end || step.none) {
        break;
      }
      walked = walked + 1;
      await page.waitForTimeout(400);
    }
  }
  await playwright_test_blank(on_page);
  let r = {
    walked,
    found,
  };
  return r;
}
