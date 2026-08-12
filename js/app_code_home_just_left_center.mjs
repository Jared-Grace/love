import { arguments_assert } from "./arguments_assert.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { property_set } from "./property_set.mjs";
import { app_code_scroll_center_faded } from "./app_code_scroll_center_faded.mjs";
export async function app_code_home_just_left_center(just_left, context) {
  arguments_assert(arguments, 2);
  ("put the row the learner just came back from in the middle of the screen, when there is one - the list is long enough that landing at the top would lose their place");
  let found = null_not_is(just_left);
  if (found) {
    property_set(context, "scroll_handled", true);
    ("tell the shared refresh this screen handled its own scrolling, so the refresh's scroll-to-top is skipped - otherwise it would run after this screen returns and undo the centring below");
    await app_code_scroll_center_faded(just_left);
  }
}
