import { property_set } from "../../../love/public/src/property_set.mjs";
import { js_statement_return_empty } from "../../../love/public/src/js_statement_return_empty.mjs";
export function js_statement_return_argument(argument) {
  let r = js_statement_return_empty();
  property_set(r, "argument", argument);
  return r;
}
