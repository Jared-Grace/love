import { arguments_assert } from "./arguments_assert.mjs";
import { playwright_happy_poll_ms } from "./playwright_happy_poll_ms.mjs";
import { less_than } from "./less_than.mjs";
import { playwright_happy_answers_now } from "./playwright_happy_answers_now.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { add } from "./add.mjs";
export async function playwright_happy_answer_wait(page, wait_ms) {
  "$plain wait_ms";
  "wait for the screen to put a question up, and say quietly that it did not when it does not";
  "A right answer is followed by a fresh question of the same kind, drawn once the success has finished being shown. A walk that looked for that question the instant the answer landed would find nothing standing but the way out, take it, and leave a lesson half worked - which is exactly how a course is walked to its end without any of it being recorded as done.";
  "Running out is an ordinary answer rather than a failure, because a screen that asked once and has no more to ask is a screen to walk on from and not a screen that is broken.";
  arguments_assert(arguments, 2);
  let step_ms = playwright_happy_poll_ms();
  let waited = 0;
  while (less_than(waited, wait_ms)) {
    let answers = await playwright_happy_answers_now(page);
    let asking = list_empty_not_is(answers);
    if (asking) {
      return true;
    }
    await page.waitForTimeout(step_ms);
    waited = add(waited, step_ms);
  }
  return false;
}
