import { js_return_argument_set } from "./js_return_argument_set.mjs";
import { js_statement_return_empty } from "./js_statement_return_empty.mjs";
export function js_statement_return_argument(argument) {
  let r = js_statement_return_empty();
  js_return_argument_set(r, argument);
  return r;
}
