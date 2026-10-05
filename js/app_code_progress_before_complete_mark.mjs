import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lessons_fns_shown } from "./app_code_lessons_fns_shown.mjs";
import { app_code_lesson_ids_short } from "./app_code_lesson_ids_short.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { list_take } from "./list_take.mjs";
import { app_code_progress_ids_complete_mark } from "./app_code_progress_ids_complete_mark.mjs";
export function app_code_progress_before_complete_mark(context, lesson_id) {
  arguments_assert(arguments, 2);
  ("Writes every lesson shown before the one with this id down as finished on this reader's own disk, and every review standing among them, so the course opens with this lesson the first one left to do.");
  let fns = app_code_lessons_fns_shown();
  let ids_short = app_code_lesson_ids_short();
  function id_of(fn) {
    let id = property_get(ids_short, fn.name);
    return id;
  }
  let ids = list_map(fns, id_of);
  let index = list_index_of(ids, lesson_id);
  let before = list_take(ids, index);
  app_code_progress_ids_complete_mark(context, before);
}
