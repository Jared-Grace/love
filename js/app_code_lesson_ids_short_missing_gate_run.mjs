import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_ids_short } from "./app_code_lesson_ids_short.mjs";
import { app_code_lessons_fns } from "./app_code_lessons_fns.mjs";
import { property_exists_not } from "./property_exists_not.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_size } from "./list_size.mjs";
export function app_code_lesson_ids_short_missing_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: every code lesson written has an id in the table, held lessons included. Read-only.");
  ("★ HELD LESSONS ARE THE ONES THIS IS FOR. The gate on the set of ids reads the lessons the app hands out, and a held lesson is not handed out, so a held lesson with no id passed it. The dev page still builds every lesson, and it stopped with an error on the first load: that happened on 2026-10-27 with While halving, and the human saw it before any gate did.");
  ("HOW MANY LESSONS WERE WALKED TRAVELS OUT BESIDE THE VERDICT, because an empty list of lessons without an id is also what this would say if the list it walks came back empty.");
  let short = app_code_lesson_ids_short();
  let fns = app_code_lessons_fns();
  let missing = [];
  for (let fn of fns) {
    let name = fn.name;
    if (property_exists_not(short, name)) {
      list_add(missing, name);
    }
  }
  list_empty_is_assert_json(missing, {
    hint: text_combine_multiple([
      "these lessons have no id - give each one a short id in ",
      fn_name("app_code_lesson_ids_short"),
      " before the dev page loads them",
    ]),
  });
  let lessons = list_size(fns);
  let r = {
    lessons,
    missing,
  };
  return r;
}
