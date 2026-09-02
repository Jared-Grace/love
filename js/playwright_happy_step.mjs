import { playwright_happy_picked_press } from "./playwright_happy_picked_press.mjs";
import { playwright_happy_stuck_not_assert } from "./playwright_happy_stuck_not_assert.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { qa_attribute_test_happy_end } from "./qa_attribute_test_happy_end.mjs";
import { playwright_by_attribute_named_all_now } from "./playwright_by_attribute_named_all_now.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { playwright_selector_handles_now } from "./playwright_selector_handles_now.mjs";
export async function playwright_happy_step(page, selector) {
  "$plain selector";
  "take one step along the way somebody takes who is getting everything right: stop if this is the end, and otherwise press the first control the selector picks out of the ones the screen has marked";
  "It knows nothing about the app in front of it. Every screen says which of its controls carries a person forward and whether there is anywhere further to go, so one walker serves every app that says so - and a screen added tomorrow is walked without this being touched.";
  "WHICH of the marked controls is wanted is the caller's to say, because that is the only part of a step that needs to know what a walk is trying to do: answer what is being asked, or leave. The screen says which controls are which; the caller says which of those it is after. Handed nothing of that kind it could only take whichever stands first, which is right while a question is standing and wrong the instant one is half answered.";
  "The FIRST of the picked controls is pressed when there are several. Several is what an answer given in order looks like - the tokens of a line being put back together - and there the order is the answer, so the earliest is the only right one to press. A screen with several unordered ways on is a screen where either would do.";
  "Being stuck is a failure and is thrown, because a screen with neither a way on nor an end is exactly what a walk exists to find: a right answer that cannot be pressed, a next that never appeared, a quiz nobody taught the app to mark. The address is thrown with it, since it is the whole of what somebody needs to go and look.";
  "Having none of the KIND asked for is not being stuck and is handed back rather than thrown. A screen holding a question and no way out, or a way out and no question, is an ordinary screen; what the caller does about it is to ask for the other kind.";
  arguments_assert(arguments, 2);
  ("the end is asked about without waiting, and the way on is asked about with waiting. Almost every screen of a course is not the end, so a question that waited for one would spend its whole timeout on every screen and take longer than the course is long. The way on is the opposite: it is expected, so waiting for it is what lets a screen that draws itself slowly be walked rather than called broken.");
  let end_key = qa_attribute_test_happy_end();
  let ends = await playwright_by_attribute_named_all_now(page, end_key);
  let arrived = list_empty_not_is(ends);
  let url = page.url();
  if (arrived) {
    let done = {
      end: true,
      none: false,
      url,
      pressed: null,
      text: null,
      why: null,
    };
    return done;
  }
  await playwright_happy_stuck_not_assert(page, url, end_key, selector);
  let picked = await playwright_selector_handles_now(page, selector);
  let bare = list_empty_is(picked);
  if (bare) {
    let nothing = {
      end: false,
      none: true,
      url,
      pressed: false,
      text: null,
      why: null,
    };
    return nothing;
  }
  let r = await playwright_happy_picked_press(picked, url);
  return r;
}
