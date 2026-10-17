import { arguments_assert } from "./arguments_assert.mjs";
import { add_1 } from "./add_1.mjs";
import { app_code_lesson_groups_numbered } from "./app_code_lesson_groups_numbered.mjs";
import { app_code_lessons } from "./app_code_lessons.mjs";
import { property_get } from "./property_get.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
export function app_code_lesson_group_parts_at(lesson_index) {
  arguments_assert(arguments, 1);
  ("the name, as parts, of the home-list group the lesson at lesson_index falls in, in the run this reader was handed - the group whose first lesson is the last one at or before it - or null when no group starts that early, which is a lesson not on the reader's list");
  ("Worked out from the same numbered groups the home list draws its folding cards from, so a lesson's heading names exactly the card it sits under, in a course cut down to a few lessons too.");
  let lesson_number = add_1(lesson_index);
  let lessons = app_code_lessons();
  let groups = app_code_lesson_groups_numbered(lessons);
  let parts = null;
  for (let group of groups) {
    let first = property_get(group, "first");
    if (less_than_equal(first, lesson_number)) {
      parts = property_get(group, "parts");
    }
  }
  return parts;
}
