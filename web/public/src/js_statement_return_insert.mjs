import { list_insert } from "../../../love/public/src/list_insert.mjs";
import { js_statement_return_argument } from "../../../love/public/src/js_statement_return_argument.mjs";
export function js_statement_return_insert(list, argument) {
  let r = js_statement_return_argument(argument);
  list_insert(list, r);
}
