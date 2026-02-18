import { js_return_argument_set } from "../../../love/public/src/js_return_argument_set.mjs";
import { js_statement_return_empty } from "../../../love/public/src/js_statement_return_empty.mjs";
export function js_statement_return_argument(argument) {
  let r = js_statement_return_empty();
  js_return_argument_set(r, argument);
  return r;
}
