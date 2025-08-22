import { js_imports_declarations } from "./js_imports_declarations.mjs";
import { list_map_property } from "./list_map_property.mjs";
export function js_imports(ast) {
  let imports_declarations = js_imports_declarations(ast);
  let imports = list_map_property(imports_declarations, "name");
  return imports;
}
