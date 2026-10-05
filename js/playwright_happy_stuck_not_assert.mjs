import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { playwright_locator_wait } from "./playwright_locator_wait.mjs";
import { playwright_by_attribute_named_all_now } from "./playwright_by_attribute_named_all_now.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { qa_attribute_test_happy } from "./qa_attribute_test_happy.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { playwright_by_tag_name_text_contents_visible } from "./playwright_by_tag_name_text_contents_visible.mjs";
import { playwright_error_records } from "./playwright_error_records.mjs";
import { list_empty_not_is_assert_json } from "./list_empty_not_is_assert_json.mjs";
export async function playwright_happy_stuck_not_assert(
  page,
  url,
  end_key,
  selector,
) {
  "$plain selector";
  "throw unless the screen in front of the walk has something marked on it to press, and say in the throw what the screen is showing instead";
  "Being stuck is a failure and is thrown, because a screen with neither a way on nor an end is exactly what a walk exists to find: a right answer that cannot be pressed, a next that never appeared, a quiz nobody taught the app to mark. The address is thrown with it, since it is the whole of what somebody needs to go and look.";
  "It asks about ALL of the marked controls and not the kind the caller is after, because having none of the kind asked for is an ordinary screen and not being stuck. A screen holding a question and no way out is a screen the caller answers; a screen holding neither is a screen nobody can leave.";
  arguments_assert(arguments, 4);
  let key = qa_attribute_test_happy();
  ("THE WAIT IS FOR EITHER MARK, the way on or the end. The end is looked for once before this, at the moment the screen is reached, and a screen that draws the end a moment later - the last review of the course, whose note comes after its celebration - was reported stuck while the end stood on it: the whole-course walk of 2026-10-05 failed that way at review 230, with no Continue and the controls of a finished review.");
  let either = text_combine_multiple(["[", key, "],[", end_key, "]"]);
  async function ways_wait() {
    let locator = page.locator(either);
    await playwright_locator_wait(locator);
    let marked = await playwright_by_attribute_named_all_now(page, key);
    return marked;
  }
  ("a wait that runs out is the same news as nothing being there, and it is caught here rather than let through, because what the waiting throws is a complaint about a selector - it names the attribute nobody wrote and not the screen that failed to write it, which is the only part anybody can go and fix");
  let ways = [];
  let waited = await catch_null_async(ways_wait);
  let found = null_not_is(waited);
  if (found) {
    ways = waited;
  }
  let ends = await playwright_by_attribute_named_all_now(page, end_key);
  let ended = list_empty_not_is(ends);
  if (ended) {
    ("the end arrived while waiting: the step reached nothing to press, and the walk asks the screen again and finds the end");
    return;
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
    selector,
    controls,
    errors,
    hint: "nothing on this screen is marked as the way on and nothing marks it as the end, so the walk is stuck - either the screen threw and is showing its apology, or it forgot to mark its right answer, or the answer is there and cannot be pressed",
  });
}
