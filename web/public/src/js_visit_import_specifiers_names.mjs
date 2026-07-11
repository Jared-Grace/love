import { js_visit_import_specifiers } from "../../../love/public/src/js_visit_import_specifiers.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function js_visit_import_specifiers_names(ast, la) {
  function lambda_import(v) {
    let node = property_get(v, "node");
    let local = property_get(node, "local");
    let name = property_get(local, "name");
    la(name);
  }
  js_visit_import_specifiers(ast, lambda_import);
}
