import { arguments_assert } from "./arguments_assert.mjs";
import { each } from "./each.mjs";
import { property_set } from "./property_set.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { function_name_to_path_import_relative } from "./function_name_to_path_import_relative.mjs";
import { property_get } from "./property_get.mjs";
import { js_imports_declarations } from "./js_imports_declarations.mjs";
export function js_imports_paths_fix_from(ast, dictionary, from_dir) {
  arguments_assert(arguments, 3);
  let imports_declarations = js_imports_declarations(ast);
  function lambda(i) {
    let name = property_get(i, "name");
    let declaration = property_get(i, "declaration");
    let from = function_name_to_path_import_relative(name, dictionary, from_dir);
    let expression = js_parse_expression(from);
    property_set(declaration, "source", expression);
  }
  each(imports_declarations, lambda);
}
