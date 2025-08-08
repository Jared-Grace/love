import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { object_merge } from "./object_merge.mjs";
import { function_parse } from "./function_parse.mjs";
import { js_imports } from "./js_imports.mjs";
import { js_declaration_single } from "./js_declaration_single.mjs";
import { js_identifiers_names } from "./js_identifiers_names.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_concat } from "./list_concat.mjs";
import { functions_names } from "./functions_names.mjs";
import { list_intersect } from "./list_intersect.mjs";
import { object_property_get } from "./object_property_get.mjs";
export async function function_imports_missing(f_name) {
  let parsed = await function_parse_declaration(f_name);
  let { ast, declaration } = parsed;
  let imports = js_imports(ast);
  let identifiers = js_identifiers_names(declaration);
  let declaration_id = object_property_get(declaration, "id");
  let name = object_property_get(declaration_id, "name");
  let imports_self = list_concat(imports, [name]);
  let missing = list_difference(identifiers, imports_self);
  let f_names = functions_names();
  let imports_missing = list_intersect(missing, f_names);
  return object_merge(
    {
      imports_missing,
    },
    parsed,
  );
}
