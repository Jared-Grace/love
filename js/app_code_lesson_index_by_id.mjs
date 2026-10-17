import { app_code_lessons } from "./app_code_lessons.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { list_index_of } from "./list_index_of.mjs";
export function app_code_lesson_index_by_id(lesson_id) {
  "where a lesson stands in the run this reader was handed, or minus one when it is not on their list - a reminder pointing back at a lesson outside their course asks this, and is drawn with the lesson's whole-run number instead";
  "2026-10-17: it threw for a lesson not on the list, which no page met until a course left out the lessons its first lesson reminds the reader of.";
  let lessons = app_code_lessons();
  let ids = list_map_property(lessons, "id");
  let included = list_includes(ids, lesson_id);
  if (not(included)) {
    let r = -1;
    return r;
  }
  let index = list_index_of(ids, lesson_id);
  return index;
}
