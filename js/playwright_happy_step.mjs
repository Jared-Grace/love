import { playwright_by_tag_name_text_contents_visible } from "./playwright_by_tag_name_text_contents_visible.mjs";
import { playwright_error_records } from "./playwright_error_records.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_empty_not_is_assert_json } from "./list_empty_not_is_assert_json.mjs";
import { list_first } from "./list_first.mjs";
import { playwright_by_attribute_named_all } from "./playwright_by_attribute_named_all.mjs";
import { playwright_by_attribute_named_all_now } from "./playwright_by_attribute_named_all_now.mjs";
import { qa_attribute_test_happy } from "./qa_attribute_test_happy.mjs";
import { qa_attribute_test_happy_end } from "./qa_attribute_test_happy_end.mjs";
export async function playwright_happy_step(page) {
  "take one step along the way somebody takes who is getting everything right: stop if this is the end, and otherwise press the one control marked as the way on";
  "It knows nothing about the app in front of it. Every screen says which of its controls carries a person forward and whether there is anywhere further to go, so one walker serves every app that says so - and a screen added tomorrow is walked without this being touched.";
  "The FIRST of the marked controls is pressed when there are several. Several is what an answer given in order looks like - the tokens of a line being put back together - and there the order is the answer, so the earliest is the only right one to press. A screen with several unordered ways on is a screen where either would do.";
  "Being stuck is a failure and is thrown, because a screen with neither a way on nor an end is exactly what a walk exists to find: a right answer that cannot be pressed, a next that never appeared, a quiz nobody taught the app to mark. The address is thrown with it, since it is the whole of what somebody needs to go and look.";
  arguments_assert(arguments, 1);
  ("the end is asked about without waiting, and the way on is asked about with waiting. Almost every screen of a course is not the end, so a question that waited for one would spend its whole timeout on every screen and take longer than the course is long. The way on is the opposite: it is expected, so waiting for it is what lets a screen that draws itself slowly be walked rather than called broken.");
  let end_key = qa_attribute_test_happy_end();
  let ends = await playwright_by_attribute_named_all_now(page, end_key);
  let arrived = list_empty_not_is(ends);
  let url = page.url();
  if (arrived) {
    let done = {
      end: true,
      url,
    };
    return done;
  }
  let key = qa_attribute_test_happy();
  async function ways_wait() {
    let marked = await playwright_by_attribute_named_all(page, key);
    return marked;
  }
  ("a wait that runs out is the same news as nothing being there, and it is caught here rather than let through, because what the waiting throws is a complaint about a selector - it names the attribute nobody wrote and not the screen that failed to write it, which is the only part anybody can go and fix");
  let ways = [];
  let waited = await catch_null_async(ways_wait);
  let found = null_not_is(waited);
  if (found) {
    ways = waited;
  }
  let stuck = list_empty_is(ways);
  let controls = [];
  let errors = [];
  if (stuck) {
    ("what the screen is OFFERING goes in the report, because an address on its own says which screen it is and not which of its controls should have been the one marked - and the words on the buttons are what somebody comparing the two has to read anyway");
    controls = await playwright_by_tag_name_text_contents_visible(
      page,
      "button",
    );
    ("and what the page WROTE DOWN goes in beside them, because the commonest way to be stuck is not a screen that forgot to mark its answer but a screen that never drew one: a fault took the app down and left the apology standing where the quiz should be. Without this the report says only that there is nothing to press, which is the true half that sends somebody looking in the wrong place.");
    errors = await playwright_error_records(page);
  }
  list_empty_not_is_assert_json(ways, {
    url,
    key,
    end_key,
    controls,
    errors,
    hint: "nothing on this screen is marked as the way on and nothing marks it as the end, so the walk is stuck - either the screen threw and is showing its apology, or it forgot to mark its right answer, or the answer is there and cannot be pressed",
  });
  let way = list_first(ways);
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
    url,
    text,
    pressed,
    why,
  };
  return step;
}
