import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_code_lessons_fns } from "./app_code_lessons_fns.mjs";
import { app_code_lessons_released_fns } from "./app_code_lessons_released_fns.mjs";
import { list_difference } from "./list_difference.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_size } from "./list_size.mjs";
export function app_code_lessons_released_gate_run() {
  "QA gate: every lesson released to a learner is still in the lesson list";
  "A released lesson taken off the lesson list but left on disk still imports cleanly, so nothing else fails - the filter just stops finding it, and it goes missing from the learner's screen along with the progress they had in it. This is the one place that says so.";
  let fns = app_code_lessons_fns();
  let released = app_code_lessons_released_fns();
  let missing = list_difference(released, fns);
  function lesson_name_get(lesson) {
    let name = property_get(lesson, "name");
    return name;
  }
  let names = list_map(missing, lesson_name_get);
  list_empty_is_assert_json(names, {
    hint: text_combine_multiple([
      "these released lessons are no longer in the lesson list - put each back, or take it out of ",
      fn_name("app_code_lessons_released_fns"),
      " once a learner losing it has been decided on",
    ]),
  });
  ("how many released lessons were looked through comes back with the verdict, because an empty release list passes too");
  let lessons = list_size(released);
  let r = {
    lessons,
  };
  return r;
}
