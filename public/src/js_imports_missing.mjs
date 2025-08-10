import { js_declaration_name } from "./js_declaration_name.mjs";
import { js_declaration_single } from "./js_declaration_single.mjs";
import { list_intersect } from "./list_intersect.mjs";
import { functions_names } from "./functions_names.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_concat } from "./list_concat.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { js_identifiers_names } from "./js_identifiers_names.mjs";
import { js_imports } from "./js_imports.mjs";
export function js_imports_missing(ast) {
  let declaration = js_declaration_single(ast);
  let imports = js_imports(ast);
  let identifiers = js_identifiers_names(declaration);
  let name = js_declaration_name(declaration);
  let imports_self = list_concat(imports, [name]);
  let missing = list_difference(identifiers, imports_self);
  let f_names = functions_names();
  let imports_missing = list_intersect(missing, f_names);
  return imports_missing;
}
function js_declaration_name(declaration) {
  let declaration_id = object_property_get(declaration, "id");
  let name = object_property_get(declaration_id, "name");
  return name;
}
