import { js_statement_return_argument } from "../../../love/public/src/js_statement_return_argument.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
export function js_statement_return_insert(list, argument) {
  let r = js_statement_return_argument(argument);
  list_add(list, r);
}
