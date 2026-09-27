import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine } from "./text_combine.mjs";
import { js_code_statement } from "./js_code_statement.mjs";
export function js_code_update_statement(name, operator) {
  arguments_assert(arguments, 2);
  ("the line that steps a name by one, written the short way: the name, then the operator handed in written twice - a++; or a--;");
  let doubled = text_combine(operator, operator);
  let stepped = text_combine(name, doubled);
  let code = js_code_statement(stepped);
  return code;
}
