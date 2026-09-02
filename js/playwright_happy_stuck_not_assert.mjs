import { arguments_assert } from "./arguments_assert.mjs";
import { qa_attribute_test_happy } from "./qa_attribute_test_happy.mjs";
import { playwright_by_attribute_named_all } from "./playwright_by_attribute_named_all.mjs";
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
  arguments_assert(arguments, 4);
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
    selector,
    controls,
    errors,
    hint: "nothing on this screen is marked as the way on and nothing marks it as the end, so the walk is stuck - either the screen threw and is showing its apology, or it forgot to mark its right answer, or the answer is there and cannot be pressed",
  });
  ("the kind wanted is asked for without waiting, because the screen has just been waited on and answered: whatever it is holding out, it is holding out now");
}
