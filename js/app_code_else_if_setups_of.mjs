import { arguments_assert } from "./arguments_assert.mjs";
import { list_get } from "./list_get.mjs";
import { js_code_let_json_statement } from "./js_code_let_json_statement.mjs";
export function app_code_else_if_setups_of(values) {
  arguments_assert(arguments, 1);
  let value_a = list_get(values, 0);
  let setup_a = js_code_let_json_statement("a", value_a);
  let value_b = list_get(values, 1);
  let setup_b = js_code_let_json_statement("b", value_b);
  let setups = [setup_a, setup_b];
  return setups;
}
