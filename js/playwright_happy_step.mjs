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
  list_empty_not_is_assert_json(ways, {
    url,
    key,
    end_key,
    hint: "nothing on this screen is marked as the way on and nothing marks it as the end, so the walk is stuck - either the screen forgot to mark its right answer, or the answer is there and cannot be pressed",
  });
  let way = list_first(ways);
  let text = await way.textContent();
  await way.click();
  let step = {
    end: false,
    url,
    text,
  };
  return step;
}
