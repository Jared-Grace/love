import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_ids_short } from "./app_code_lesson_ids_short.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { app_code_lesson_groups } from "./app_code_lesson_groups.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { add_1 } from "./add_1.mjs";
import { list_add } from "./list_add.mjs";
export function app_code_lesson_groups_numbered(lessons) {
  arguments_assert(arguments, 1);
  ("the groups the home list folds its lessons into, each with the number of the lesson it starts at in lessons, the run this reader was given - a group whose first lesson is not in that run is left out, since none of its lessons are drawn either");
  ("Numbers are worked out here rather than written down in the groups, so a lesson added before a group's first lesson moves the number and leaves the group starting where it did.");
  let ids = app_code_lesson_ids_short();
  let lesson_ids = list_map_property(lessons, "id");
  let numbered = [];
  for (let group of app_code_lesson_groups()) {
    let lesson_fn = property_get(group, "lesson");
    let lesson_fn_name = lesson_fn.name;
    let lesson_id = property_get(ids, lesson_fn_name);
    let shown = list_includes(lesson_ids, lesson_id);
    if (shown) {
      let index = list_index_of(lesson_ids, lesson_id);
      let parts = property_get(group, "parts");
      let first = add_1(index);
      list_add(numbered, {
        parts,
        first,
      });
    }
  }
  return numbered;
}
