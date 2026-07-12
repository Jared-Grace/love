import { js_visit_import_specifiers } from "./js_visit_import_specifiers.mjs";
import { property_get } from "./property_get.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
export function js_visit_import_specifiers_names(ast) {
  function lambda2(la) {
    function lambda_import(v) {
      let node = property_get(v, "node");
      let local = property_get(node, "local");
      let name = property_get(local, "name");
      la(name);
    }
    js_visit_import_specifiers(ast, lambda_import);
  }
  let names = list_adder_unique(lambda2);
  return names;
}
