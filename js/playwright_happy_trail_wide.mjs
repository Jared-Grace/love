import { greater_than } from "./greater_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function playwright_happy_trail_wide(trail) {
  arguments_assert(arguments, 1);
  ("the screens a walk reached that were wider than the window it was walked in, read back out of the trail it left: each one's address and the innermost parts reaching past the right edge");
  ("A part wider than a phone makes the reader scroll the whole page sideways to read it. It often shows only after an answer, and only for some of the words a question draws at random, so the walk - which answers every screen, many times over - is where it is found rather than any one picture of a page.");
  ("A step with no measurement says nothing either way: the step that says the course has ended is read off the last screen without anything being pressed, so nothing was measured after it.");
  let found = [];
  for (let step of trail) {
    let wide = step.wide;
    if (wide && greater_than(wide.length, 0)) {
      found.push({
        url: step.wide_url,
        wide,
      });
    }
  }
  return found;
}
