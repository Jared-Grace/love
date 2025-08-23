import { object_property_set } from "./object_property_set.mjs";
import { js_string } from "./js_string.mjs";
import { function_name_to_path_import } from "./function_name_to_path_import.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { each } from "./each.mjs";
import { js_imports_declarations } from "./js_imports_declarations.mjs";
import { marker } from "./markerr.mjs";
export function js_imports_paths_fix(ast) {
  let imports_declarations = js_imports_declarations(ast);
  function lambda(i) {
    let name = object_property_get(i, "name");
    let declaration = object_property_get(i, "declaration");
    const from = function_name_to_path_import(name);
    let s = js_string(from);
    object_property_set(declaration, "source", s);
  }
  each(imports_declarations, lambda);
  marker("1");
}
