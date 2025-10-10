import { marker } from "../../../love/public/src/marker.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
import { function_name_to_path_import } from "../../../love/public/src/function_name_to_path_import.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { js_imports_declarations } from "../../../love/public/src/js_imports_declarations.mjs";
export function js_imports_paths_fix_inner(ast, dictionary) {
  let imports_declarations = js_imports_declarations(ast);
  function lambda(i) {
    let name = object_property_get(i, "name");
    let declaration = object_property_get(i, "declaration");
    const from = function_name_to_path_import(name, dictionary);
    let expression = js_parse_expression(from);
    object_property_set(declaration, "source", expression);
  }
  each(imports_declarations, lambda);
  marker("1");
}
