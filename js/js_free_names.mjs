import { js_flo } from "./js_flo.mjs";
import { js_flo_name } from "./js_flo_name.mjs";
import { js_imports } from "./js_imports.mjs";
import { js_declared_names } from "./js_declared_names.mjs";
import { js_function_params_all } from "./js_function_params_all.mjs";
import { js_global_names } from "./js_global_names.mjs";
import { js_identifiers_referenced_names } from "./js_identifiers_referenced_names.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_difference } from "./list_difference.mjs";
export function js_free_names(ast) {
  "identifiers referenced as values but bound by nothing in this module — not imported, not the module's own function, not declared, not a parameter, not a JS global; these are the names a runtime ReferenceError would name";
  let declaration = js_flo(ast);
  let referenced = js_identifiers_referenced_names(declaration);
  let bound = list_concat_multiple([
    js_imports(ast),
    [js_flo_name(ast)],
    js_declared_names(ast),
    js_function_params_all(ast),
    js_global_names(),
  ]);
  let free = list_difference(referenced, bound);
  return free;
}
