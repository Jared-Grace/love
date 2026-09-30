import { app_code_progress_ids_complete_mark } from "./app_code_progress_ids_complete_mark.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lessons_released_fns } from "./app_code_lessons_released_fns.mjs";
import { app_code_lesson_ids_short } from "./app_code_lesson_ids_short.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
export function app_code_progress_released_complete_mark(context) {
  arguments_assert(arguments, 1);
  ("Writes every released lesson down as finished on this reader's own disk, so a working copy's lesson list shows the lessons the public site already has as done and leaves only the rest open.");
  ("Released is read off the released list, the same list the public site is cut by, so what is marked is what the public site shows and nothing else. Latest used to be cut by it too; since 2026-09-26 latest shows every lesson, so what latest has is marked by ", fn_name("app_code_lessons_latest_ids"), " instead.");
  let released = app_code_lessons_released_fns();
  let ids_short = app_code_lesson_ids_short();
  function id_of(fn) {
    let id = property_get(ids_short, fn.name);
    return id;
  }
  let lesson_ids = list_map(released, id_of);
  ("A review is marked when every lesson at or above it is released, which the marking below does for any list of lessons");
  app_code_progress_ids_complete_mark(context, lesson_ids);
}
