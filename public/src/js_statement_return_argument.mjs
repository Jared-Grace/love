import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { js_statement_return_empty } from "../../../love/public/src/js_statement_return_empty.mjs";
export function js_statement_return_argument(argument) {
  let r = js_statement_return_empty();
  object_property_set(r, "argument", argument);
  return r;
}
