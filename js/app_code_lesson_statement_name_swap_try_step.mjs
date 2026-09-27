import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_names } from "./app_code_lesson_statement_name_value_names.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
import { app_code_lesson_statement_name_fill_from_step } from "./app_code_lesson_statement_name_fill_from_step.mjs";
import { property_get } from "./property_get.mjs";
import { list_concat } from "./list_concat.mjs";
import { js_code_assign_statement } from "./js_code_assign_statement.mjs";
export function app_code_lesson_statement_name_swap_try_step() {
  arguments_assert(arguments, 0);
  ("the second step of the swapping ladder: the first step's a = b; with b = a; after it - the swap a learner tries first, which leaves both names holding the same number");
  let names = app_code_lesson_statement_name_value_names();
  let name_a = list_first(names);
  let name_b = list_second(names);
  let before = app_code_lesson_statement_name_fill_from_step();
  let middle_before = property_get(before, "middle");
  let code = js_code_assign_statement(name_b, name_a);
  let middle = list_concat(middle_before, [code]);
  let logged = [name_a, name_b];
  let step = {
    middle,
    logged,
  };
  return step;
}
