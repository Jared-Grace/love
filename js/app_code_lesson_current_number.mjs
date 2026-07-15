import { app_code_lessons } from "./app_code_lessons.mjs";
import { app_code_lesson_current_id } from "./app_code_lesson_current_id.mjs";
import { list_index_of_property } from "./list_index_of_property.mjs";
import { add_1 } from "./add_1.mjs";
export function app_code_lesson_current_number(context) {
  "the 1-based position of the current lesson in the lesson list";
  let lessons = app_code_lessons();
  let current_id = app_code_lesson_current_id(context);
  let index = list_index_of_property(lessons, "id", current_id);
  let number = add_1(index);
  return number;
}
