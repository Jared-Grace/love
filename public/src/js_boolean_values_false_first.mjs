import { list_reverse } from "../../../love/public/src/list_reverse.mjs";
import { js_boolean_values } from "../../../love/public/src/js_boolean_values.mjs";
export function js_boolean_values_false_first() {
  let r = js_boolean_values();
  list_reverse(r);
  return r;
}
