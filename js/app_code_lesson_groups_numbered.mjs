import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_ids_short } from "./app_code_lesson_ids_short.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { app_code_lessons_fns } from "./app_code_lessons_fns.mjs";
import { app_code_lesson_groups } from "./app_code_lesson_groups.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { list_size } from "./list_size.mjs";
import { list_slice } from "./list_slice.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_first } from "./list_first.mjs";
import { add_1 } from "./add_1.mjs";
import { list_add } from "./list_add.mjs";
export function app_code_lesson_groups_numbered(lessons) {
  arguments_assert(arguments, 1);
  ("the groups the home list folds its lessons into, each with the number of the lesson it starts at in lessons, the run this reader was given - a group none of whose lessons are in that run is left out, since there is nothing to draw under it");
  ("Numbers are worked out here rather than written down in the groups, so a lesson added before a group's first lesson moves the number and leaves the group starting where it did.");
  let ids = app_code_lesson_ids_short();
  let lesson_ids = list_map_property(lessons, "id");
  ("2026-10-15: a group starts at the first lesson of it this reader was given, which is its own first lesson whenever that one is shown. A run cut down to a few lessons, like the step lessons alone, holds none of the groups' first lessons, and the home list then had no group to put its first row in. Not picked: dropping the groups from a cut run, which would leave its rows under no heading at all");
  function id_of(fn) {
    let id = property_get(ids, fn.name);
    return id;
  }
  let list = app_code_lessons_fns();
  let every = list_map(list, id_of);
  let groups = app_code_lesson_groups();
  function start_of(group) {
    let lesson_fn = property_get(group, "lesson");
    let item = id_of(lesson_fn);
    let start = list_index_of(every, item);
    return start;
  }
  let starts = list_map(groups, start_of);
  let numbered = [];
  for (let group of groups) {
    let start = start_of(group);
    let end = list_size(every);
    for (let other of starts) {
      if (less_than(start, other) && less_than(other, end)) {
        end = other;
      }
    }
    let span = list_slice(every, start, end);
    function shown_is(id) {
      let shown_one = list_includes(lesson_ids, id);
      return shown_one;
    }
    let shown_ids = list_filter(span, shown_is);
    let shown = list_empty_not_is(shown_ids);
    if (shown) {
      let lesson_id = list_first(shown_ids);
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
