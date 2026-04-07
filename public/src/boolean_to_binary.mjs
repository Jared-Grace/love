import { list_reverse } from "../../../love/public/src/list_reverse.mjs";
import { js_boolean_values } from "../../../love/public/src/js_boolean_values.mjs";
import { list_index_of } from "./list_index_of.mjs";
export function boolean_to_binary(b) {
  let r = js_boolean_values();
  list_reverse(r);
  let binary = list_index_of(r, b);
  return binary;
}
