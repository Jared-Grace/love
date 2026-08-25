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
