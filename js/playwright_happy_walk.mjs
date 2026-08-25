import { not } from "./not.mjs";
import { log } from "./log.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { assert_json } from "./assert_json.mjs";
import { less_than } from "./less_than.mjs";
import { list_add } from "./list_add.mjs";
import { list_take_last } from "./list_take_last.mjs";
import { list_size } from "./list_size.mjs";
import { page_capture_settle_ms } from "./page_capture_settle_ms.mjs";
import { playwright_happy_step } from "./playwright_happy_step.mjs";
import { property_get } from "./property_get.mjs";
export async function playwright_happy_walk(page, steps_max) {
  "$plain steps_max";
  "walk an app the whole way through as somebody who gets everything right: press the way on, wait for the screen to change, press the way on again, until the app says there is nowhere further to go";
  "This is the one test that answers the question a person actually asks about a course - can you get to the end of it. Every other check reads a screen and says whether it looks right; none of them presses anything, so a right answer that cannot be clicked, a next button that never appears, or a screen that throws halfway through is invisible to all of them and obvious to this.";
  "It ends three ways and they mean different things. Reaching the end is a pass. Running out of things to press is thrown by the step below, with the address of the screen it happened on. Reaching the cap means the app went round in a circle - the way on was pressed and led back to something offering the same way on - which is a bug of its own and would otherwise run forever.";
  "Every step is kept, not just the count, because the interesting question after a red walk is what the last few screens were. The cap failure carries the tail rather than the whole trail: a walk is thousands of steps long and the beginning of it says nothing about where it got stuck.";
  arguments_assert(arguments, 2);
  let trail = [];
  let settle = page_capture_settle_ms();
  let steps = 0;
  ("a control that goes from the page between being found and being pressed is an ordinary miss, and a run of them in a row is not. One means a screen moved while it was being read; a run of them means the screen is offering something marked that cannot be pressed at all, and every one of them costs the press its whole timeout - so left alone the walk spends hours saying nothing rather than naming the screen.");
  let missed = 0;
  let missed_max = 3;
  while (less_than(steps, steps_max)) {
    let step = await playwright_happy_step(page);
    ("every step is said out loud as it is taken, because a walk of a whole course runs for a quarter of an hour and says nothing at all until it is over - so somebody watching cannot tell a walk that is working from one going round in a circle, and either way finds out only at the end");
    log(playwright_happy_walk.name, step);
    list_add(trail, step);
    let end = property_get(step, "end");
    if (end) {
      let walked = {
        steps: list_size(trail),
        trail,
      };
      return walked;
    }
    let pressed = property_get(step, "pressed");
    missed = missed + 1;
    if (pressed) {
      missed = 0;
    }
    let missing = less_than(missed_max, missed);
    let url = property_get(step, "url");
    let b = not(missing);
    ("the words on the control and the reason the press missed go into the failure, because the address alone names the screen and not which of the things on it is the one that cannot be pressed, nor which of the several ways a press can miss this one is");
    let text = property_get(step, "text");
    let why = property_get(step, "why");
    assert_json(b, {
      url,
      text,
      why,
      missed,
      hint: "this screen keeps offering a control marked as the way on that cannot be pressed - it is there to be found and gone by the time it is pressed, so either it is being drawn again and again, or it is marked and then taken away without the mark going with it",
    });
    await page.waitForTimeout(settle);
    steps = steps + 1;
  }
  let tail_size = 12;
  let tail = list_take_last(trail, tail_size);
  assert_json(false, {
    steps_max,
    tail,
    hint: "the walk took its whole allowance of steps without the app ever saying it had reached the end - either the course is longer than the allowance, or a screen leads back to itself and the walk is going round in a circle",
  });
}
