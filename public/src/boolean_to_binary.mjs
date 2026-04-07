import { js_boolean_values_false_first } from "../../../love/public/src/js_boolean_values_false_first.mjs";
import { list_index_of } from "./list_index_of.mjs";
export function boolean_to_binary(b) {
  let r = js_boolean_values_false_first();
  let binary = list_index_of(r, b);
  return binary;
}
