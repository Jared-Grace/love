import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_progress_lessons_complete_mark } from "./app_code_progress_lessons_complete_mark.mjs";
import { app_code_lesson_ids_short } from "./app_code_lesson_ids_short.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { app_code_lessons_fns_shown } from "./app_code_lessons_fns_shown.mjs";
import { app_code_review_numbers } from "./app_code_review_numbers.mjs";
import { list_take } from "./list_take.mjs";
import { list_all } from "./list_all.mjs";
import { app_code_review_complete_record } from "./app_code_review_complete_record.mjs";
import { each } from "./each.mjs";
export function app_code_progress_ids_complete_mark(context, lesson_ids) {
  arguments_assert(arguments, 2);
  ("Writes the lessons with these ids down as finished on this reader's own disk, and every review standing where each lesson at or above it is one of them, so a review before the first lesson left open reads done and every one after it stays open, because it may ask about that lesson.");
  app_code_progress_lessons_complete_mark(context, lesson_ids);
  let ids_short = app_code_lesson_ids_short();
  function marked_is(fn) {
    let id = property_get(ids_short, fn.name);
    let included = list_includes(lesson_ids, id);
    return included;
  }
  let fns = app_code_lessons_fns_shown();
  let numbers = app_code_review_numbers();
  function each_number(number) {
    let above = list_take(fns, number);
    let all = list_all(above, marked_is);
    if (all) {
      app_code_review_complete_record(context, number);
    }
  }
  each(numbers, each_number);
}
