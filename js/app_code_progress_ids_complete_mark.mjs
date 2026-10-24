import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_progress_lessons_complete_mark } from "./app_code_progress_lessons_complete_mark.mjs";
import { app_code_lesson_ids_short } from "./app_code_lesson_ids_short.mjs";
import { property_in_list } from "./property_in_list.mjs";
import { app_code_lessons_fns_shown } from "./app_code_lessons_fns_shown.mjs";
import { app_code_checkpoints } from "./app_code_checkpoints.mjs";
import { list_take } from "./list_take.mjs";
import { property_get } from "./property_get.mjs";
import { list_all } from "./list_all.mjs";
import { app_code_review_complete_record } from "./app_code_review_complete_record.mjs";
import { each } from "./each.mjs";
export function app_code_progress_ids_complete_mark(context, lesson_ids) {
  arguments_assert(arguments, 2);
  ("Writes the lessons with these ids down as finished on this reader's own disk, and every review standing where each lesson at or above it is one of them, so a review before the first lesson left open reads done and every one after it stays open, because it may ask about that lesson.");
  app_code_progress_lessons_complete_mark(context, lesson_ids);
  let ids_short = app_code_lesson_ids_short();
  function marked_is(fn) {
    let included = property_in_list(ids_short, fn.name, lesson_ids);
    return included;
  }
  let fns = app_code_lessons_fns_shown();
  ("a milestone is marked by the same rule as a review, read at the lesson it stands under, and filed under its own key");
  let checkpoints = app_code_checkpoints();
  function each_checkpoint(checkpoint) {
    let count = property_get(checkpoint, "number");
    let above = list_take(fns, count);
    let all = list_all(above, marked_is);
    if (all) {
      let number = property_get(checkpoint, "key");
      app_code_review_complete_record(context, number);
    }
  }
  each(checkpoints, each_checkpoint);
}
