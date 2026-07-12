import { js_statement_return_argument } from "./js_statement_return_argument.mjs";
import { list_add } from "./list_add.mjs";
export function js_statement_return_add(list, argument) {
  let r = js_statement_return_argument(argument);
  list_add(list, r);
}
