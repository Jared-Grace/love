import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_one_more_above_box_one } from "./app_code_lesson_statement_name_one_more_above_box_one.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_lesson_statement_name_one_more_above_box_twice } from "./app_code_lesson_statement_name_one_more_above_box_twice.mjs";
export function app_code_lesson_statement_name_one_more_above_start(root) {
  arguments_assert(arguments, 1);
  let r = app_code_lesson_statement_name_one_more_above_box_one(root);
  let box_one = property_get(r, "box_one");
  let twice = property_get(r, "twice");
  let once = property_get(r, "once");
  let more = property_get(r, "more");
  let r2 = app_code_lesson_statement_name_one_more_above_box_twice(
    r,
    box_one,
    more,
    once,
    root,
  );
  let box_twice = property_get(r2, "box_twice");
  let code = property_get(r2, "code6");
  let name = property_get(r2, "name");
  let start = property_get(r2, "start");
  let r3 = {
    twice,
    box_twice,
    code,
    name,
    start,
  };
  return r3;
}
