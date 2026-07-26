import { list_intersect } from "./list_intersect.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { js_identifiers_names } from "./js_identifiers_names.mjs";
import { js_imports } from "./js_imports.mjs";
import { js_declared_names } from "./js_declared_names.mjs";
import { js_function_params_all } from "./js_function_params_all.mjs";
export function js_imports_missing_specify_program(ast, candidates) {
  "the same question as the twin without the suffix, asked of a file that need not export a single function — a script, or a module with several. Parameters count as bound here too: a parameter sharing a function's name is still that parameter everywhere the parameter is visible, and importing the function over it only adds a module nobody reads.";
  let imports = js_imports(ast);
  let declared = js_declared_names(ast);
  let params = js_function_params_all(ast);
  let identifiers = js_identifiers_names(ast);
  let imports_self = list_concat_multiple([imports, declared, params]);
  let missing = list_difference(identifiers, imports_self);
  let imports_missing = list_intersect(missing, candidates);
  return imports_missing;
}
