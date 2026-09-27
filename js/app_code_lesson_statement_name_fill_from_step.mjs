import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_names } from "./app_code_lesson_statement_name_value_names.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
import { js_code_assign_statement } from "./js_code_assign_statement.mjs";
export function app_code_lesson_statement_name_fill_from_step() {
  arguments_assert(arguments, 0);
  ("the first step of the swapping ladder: a = b; - a is given what b holds, and both are written out");
  let names = app_code_lesson_statement_name_value_names();
  let name_a = list_first(names);
  let name_b = list_second(names);
  let code = js_code_assign_statement(name_a, name_b);
  let middle = [code];
  let logged = [name_a, name_b];
  let step = {
    middle,
    logged,
  };
  return step;
}
