import { js_identifier_name_includes_try } from "../../love/js/js_identifier_name_includes_try.mjs";
import { property_get } from "../../love/js/property_get.mjs";
export function js_callee_name_includes_try(n, part) {
  let callee = property_get(n, "callee");
  let includes = js_identifier_name_includes_try(callee, part);
  return includes;
}
