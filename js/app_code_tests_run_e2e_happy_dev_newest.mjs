import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lessons_fns } from "./app_code_lessons_fns.mjs";
import { list_last } from "./list_last.mjs";
import { app_code_lesson_ids_short } from "./app_code_lesson_ids_short.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_tests_run_e2e_happy_from } from "./app_code_tests_run_e2e_happy_from.mjs";
export async function app_code_tests_run_e2e_happy_dev_newest() {
  "click through the newest lesson of the working copy, and on to the end of the course, as somebody who gets every question right";
  "It takes nothing, unlike the walk from a named lesson it calls, because that one may not be granted: an argument reaching code that runs code is a refusal whatever the argument says, and a walk asked for after every new lesson is asked for too often to approve each time - asked for by the human 2026-10-05. The newest lesson is the one just written, so a command fixed on it is the one that is wanted nearly every time; for an earlier lesson, the walk from a named lesson is still there, asking.";
  arguments_assert(arguments, 0);
  let fns = app_code_lessons_fns();
  let newest = list_last(fns);
  let ids_short = app_code_lesson_ids_short();
  let lesson_id = property_get(ids_short, newest.name);
  let walked = await app_code_tests_run_e2e_happy_from("dev", lesson_id);
  return walked;
}
