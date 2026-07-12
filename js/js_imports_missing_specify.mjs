import { list_intersect } from "./list_intersect.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_concat } from "./list_concat.mjs";
import { js_identifiers_names } from "./js_identifiers_names.mjs";
import { js_imports } from "./js_imports.mjs";
import { js_flo } from "./js_flo.mjs";
import { js_flo_name } from "./js_flo_name.mjs";
export function js_imports_missing_specify(ast, candidates) {
  let name = js_flo_name(ast);
  let declaration = js_flo(ast);
  let imports = js_imports(ast);
  let identifiers = js_identifiers_names(declaration);
  let imports_self = list_concat(imports, [name]);
  let missing = list_difference(identifiers, imports_self);
  let imports_missing = list_intersect(missing, candidates);
  return imports_missing;
}
