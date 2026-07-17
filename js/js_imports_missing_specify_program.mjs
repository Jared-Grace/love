import { list_intersect } from "./list_intersect.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_concat } from "./list_concat.mjs";
import { js_identifiers_names } from "./js_identifiers_names.mjs";
import { js_imports } from "./js_imports.mjs";
import { js_declared_names } from "./js_declared_names.mjs";
export function js_imports_missing_specify_program(ast, candidates) {
  let imports = js_imports(ast);
  let declared = js_declared_names(ast);
  let identifiers = js_identifiers_names(ast);
  let imports_self = list_concat(imports, declared);
  let missing = list_difference(identifiers, imports_self);
  let imports_missing = list_intersect(missing, candidates);
  return imports_missing;
}
