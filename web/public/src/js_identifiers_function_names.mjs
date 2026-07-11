import { js_visit_function_nodes_names } from "../../../love/public/src/js_visit_function_nodes_names.mjs";
import { js_visit_import_specifiers_names } from "../../../love/public/src/js_visit_import_specifiers_names.mjs";
import { list_concat } from "../../../love/public/src/list_concat.mjs";
import { list_unique } from "../../../love/public/src/list_unique.mjs";
export function js_identifiers_function_names(ast) {
  const declaration_names = js_visit_function_nodes_names(ast);
  const import_names = js_visit_import_specifiers_names(ast);
  const names = list_unique(list_concat(declaration_names, import_names));
  return names;
}
