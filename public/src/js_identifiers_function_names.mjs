import { js_visit_function_nodes_names } from "../../../love/public/src/js_visit_function_nodes_names.mjs";
import { js_visit_import_specifiers_names } from "../../../love/public/src/js_visit_import_specifiers_names.mjs";
import { list_adder_unique } from "../../../love/public/src/list_adder_unique.mjs";
export function js_identifiers_function_names(ast) {
  function lambda2(la) {
    js_visit_function_nodes_names(ast, la);
    js_visit_import_specifiers_names(ast, la);
  }
  const names = list_adder_unique(lambda2);
  return names;
}
