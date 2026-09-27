import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_names } from "./app_code_lesson_statement_name_value_names.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
import { app_code_lesson_statement_name_temp } from "./app_code_lesson_statement_name_temp.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_assign_statement } from "./js_code_assign_statement.mjs";
export function app_code_lesson_statement_name_temp_keep_step() {
  arguments_assert(arguments, 0);
  ("the third step of the swapping ladder: let temp = a; before a = b; - temp keeps what a held, and temp and a are written out");
  ("It does not add to the second step's program: it puts the saving line in front of a = b; and leaves out b = a;, because it is the answer to why the second step lost a number, and the swapping line comes back in the step after");
  let names = app_code_lesson_statement_name_value_names();
  let name_a = list_first(names);
  let name_b = list_second(names);
  let temp = app_code_lesson_statement_name_temp();
  let code = js_code_let_statement(temp, name_a);
  let code2 = js_code_assign_statement(name_a, name_b);
  let middle = [code, code2];
  let logged = [temp, name_a];
  let step = {
    middle,
    logged,
  };
  return step;
}
