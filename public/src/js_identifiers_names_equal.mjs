import { equal_by } from "../../../love/public/src/equal_by.mjs";
import { js_identifier_name } from "../../../love/public/src/js_identifier_name.mjs";
export function js_identifiers_names_equal(a, b) {
  let ne = equal_by(a, b, js_identifier_name);
  return ne;
}
