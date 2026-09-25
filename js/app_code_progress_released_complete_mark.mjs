import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lessons_released_fns } from "./app_code_lessons_released_fns.mjs";
import { app_code_lesson_ids_short } from "./app_code_lesson_ids_short.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { app_code_progress_lessons_complete_mark } from "./app_code_progress_lessons_complete_mark.mjs";
import { app_code_lessons_fns_shown } from "./app_code_lessons_fns_shown.mjs";
import { list_includes } from "./list_includes.mjs";
import { app_code_review_numbers } from "./app_code_review_numbers.mjs";
import { list_take } from "./list_take.mjs";
import { list_all } from "./list_all.mjs";
import { app_code_review_complete_record } from "./app_code_review_complete_record.mjs";
import { each } from "./each.mjs";
export function app_code_progress_released_complete_mark(context) {
  arguments_assert(arguments, 1);
  ("Writes every released lesson down as finished on this reader's own disk, so a working copy's lesson list shows the lessons latest already has as done and leaves only the new ones open.");
  ("Released is read off the released list, the same list latest is cut by, so what is marked is what latest shows and nothing else.");
  let released = app_code_lessons_released_fns();
  let ids_short = app_code_lesson_ids_short();
  function id_of(fn) {
    let id = property_get(ids_short, fn.name);
    return id;
  }
  let lesson_ids = list_map(released, id_of);
  app_code_progress_lessons_complete_mark(context, lesson_ids);
  ("A review is marked when every lesson at or above it is released, so the reviews standing before the first new lesson read done and every one after it stays open, because it may ask about the new lesson.");
  let fns = app_code_lessons_fns_shown();
  function released_is(fn) {
    let included = list_includes(released, fn);
    return included;
  }
  let numbers = app_code_review_numbers();
  function each_number(number) {
    let above = list_take(fns, number);
    let all = list_all(above, released_is);
    if (all) {
      app_code_review_complete_record(context, number);
    }
  }
  each(numbers, each_number);
}
