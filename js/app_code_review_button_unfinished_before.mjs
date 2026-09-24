import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_incomplete_next } from "./app_code_lesson_incomplete_next.mjs";
import { null_is } from "./null_is.mjs";
import { app_code_lessons } from "./app_code_lessons.mjs";
import { list_take } from "./list_take.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { app_code_lesson_go } from "./app_code_lesson_go.mjs";
import { emoji_arrow_left } from "./emoji_arrow_left.mjs";
import { text_combine_middle_space_nb } from "./text_combine_middle_space_nb.mjs";
import { app_shared_button_wide_spaced } from "./app_shared_button_wide_spaced.mjs";
export function app_code_review_button_unfinished_before(
  context,
  parent,
  number,
) {
  "$plain number";
  "The button at the end of a finished review that goes back to the first lesson before the review this learner has not finished - one they skipped on the way here. Renders nothing (returns null) where every lesson before the review is finished.";
  "IT SAYS GO BACK, never next, so it does not break the rule that a button saying next only carries a learner further on. A review is the moment to offer it: the learner has just been tested on those lessons, and the ones they skipped are the gap.";
  "It looks from the very top of the list, the same place the home screen's button looks from, and offers the lesson only when it stands before the review. A first unfinished lesson further on is not a way back, and the other buttons already offer that.";
  arguments_assert(arguments, 3);
  let lesson_none = null;
  let first = app_code_lesson_incomplete_next(context, 0, lesson_none);
  let none = null_is(first);
  if (none) {
    return null;
  }
  let lessons = app_code_lessons();
  let before = list_take(lessons, number);
  let ids_before = list_map_property(before, "id");
  let id_first = property_get(first, "id");
  let is_before = list_includes(ids_before, id_first);
  if (not(is_before)) {
    return null;
  }
  async function go() {
    await app_code_lesson_go(first, context);
  }
  let left = emoji_arrow_left();
  let text = text_combine_middle_space_nb(
    left,
    "Go back to the first unfinished lesson",
  );
  let button = app_shared_button_wide_spaced(parent, text, go);
  return button;
}
