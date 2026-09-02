import { arguments_assert } from "./arguments_assert.mjs";
import { list_first } from "./list_first.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { catch_error_text_or_null_async } from "./catch_error_text_or_null_async.mjs";
import { null_is } from "./null_is.mjs";
export async function playwright_happy_picked_press(picked, url) {
  arguments_assert(arguments, 2);
  let way = list_first(picked);
  ("the press is given seconds rather than the half-minute a press is normally allowed, because this one has just been FOUND: it was on the page a moment ago, so it is either pressable now or it has gone. Waiting out the full allowance buys nothing and costs it on every screen that moves while it is being read, which over a whole course is most of the time the walk takes.");
  let press_ms = 5000;
  ("the words are read before the press rather than after it, because a press that fails still leaves the question of WHICH control failed - and a control that has gone by the time it is pressed had words a moment earlier that say which one it was");
  async function words_read() {
    let words = await way.textContent();
    return words;
  }
  let text = await catch_null_async(words_read);
  async function press() {
    await way.click({
      timeout: press_ms,
    });
  }
  ("a control that has gone from the page between being found and being pressed is an ordinary miss rather than a failure, so the press is caught and the step simply says it did not land");
  ("A screen is a moving thing: a piece the learner no longer needs is taken away, an answer settles, a line closes up. Any of those can carry off the very control this step chose, and none of them is anything wrong - the next step asks the screen again and finds whatever is standing then. Thrown instead, it would fail a walk of a course that works, and the fault it named would be a screen doing exactly what it is meant to.");
  ("What went wrong is KEPT rather than thrown away, because the ways a press can miss are not one thing and they need different fixes: a control carried off the page is a screen that moved, a control nothing can reach is a screen drawing something on top of it, and a control that never settles is a screen still animating. The one that misses over and over is a fault, and this is the only line that says which fault it is.");
  let why = await catch_error_text_or_null_async(press);
  let pressed = null_is(why);
  let step = {
    end: false,
    none: false,
    url,
    text,
    pressed,
    why,
  };
  return step;
}
