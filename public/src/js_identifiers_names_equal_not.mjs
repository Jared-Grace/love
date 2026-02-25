import { js_identifier_name } from "../../../love/public/src/js_identifier_name.mjs";
import { equal_by_not } from "../../../love/public/src/equal_by_not.mjs";
export function js_identifiers_names_equal_not(id, argument) {
  let n2 = equal_by_not(id, argument, js_identifier_name);
  return n2;
}
