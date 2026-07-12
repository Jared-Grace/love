import { js_identifier_name } from "./js_identifier_name.mjs";
import { equal_by_not } from "./equal_by_not.mjs";
export function js_identifiers_names_equal_not(a, b) {
  let ne = equal_by_not(a, b, js_identifier_name);
  return ne;
}
