import { arguments_assert } from "./arguments_assert.mjs";
import { playwright_happy_poll_ms } from "./playwright_happy_poll_ms.mjs";
import { less_than } from "./less_than.mjs";
import { playwright_quiz_correct_count } from "./playwright_quiz_correct_count.mjs";
import { playwright_happy_answers_now } from "./playwright_happy_answers_now.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { add } from "./add.mjs";
export async function playwright_happy_answered_wait(
  page,
  count_before,
  url_before,
  wait_ms,
) {
  "$plain count_before";
  "$plain wait_ms";
  "wait, after a press that answered part of what a screen was asking, until the screen can be SEEN to have moved on, and hand back the count of right answers as it stands then";
  "Three things count as having moved on and they are three different halves of a question being answered. The count going up is the answer being taken. A question standing again is a question with more than one press in it, or a fresh one drawn after the last was taken. The address changing is the press having been the way on after all.";
  "Waiting a fixed length of time instead is a race, and it is lost on any screen that tidies itself up before asking the rest of its question: for that third of a second nothing is marked but the way out, and a walk on a timer takes it. There is no length of time that wins both that race and the half second a right answer is shown green for, which is why this waits on the screen rather than on the clock.";
  arguments_assert(arguments, 4);
  let step_ms = playwright_happy_poll_ms();
  let waited = 0;
  let count = count_before;
  while (less_than(waited, wait_ms)) {
    count = await playwright_quiz_correct_count(page);
    let taken = less_than(count_before, count);
    if (taken) {
      return count;
    }
    let answers = await playwright_happy_answers_now(page);
    let asking = list_empty_not_is(answers);
    if (asking) {
      return count;
    }
    let url = page.url();
    let same = equal(url, url_before);
    let moved = not(same);
    if (moved) {
      return count;
    }
    await page.waitForTimeout(step_ms);
    waited = add(waited, step_ms);
  }
  return count;
}
