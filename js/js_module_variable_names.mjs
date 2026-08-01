import { list_map_concat_multiple } from "./list_map_concat_multiple.mjs";
import { property_get } from "./property_get.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { list_map } from "./list_map.mjs";
import { js_function_declaration_name } from "./js_function_declaration_name.mjs";
export function js_module_variable_names(ast) {
  "The names a file's own top-level variables are bound to - the state every function in the file shares. Only the ones written at the outer level count: a variable declared inside a function belongs to that function and travels with it, while these stay behind in the file that declared them.";
  "Functions declared at that same level are deliberately left out. A function is reachable from anywhere once it lives in its own file, so a reference to one is not shared state and does not stop anything from moving.";
  let body = property_get(ast, "body");
  let declarations = list_filter_property(body, "type", "VariableDeclaration");
  function lambda(declaration) {
    let declarators = property_get(declaration, "declarations");
    let names_inner = list_map(declarators, js_function_declaration_name);
    return names_inner;
  }
  let names = list_map_concat_multiple(declarations, lambda);
  return names;
}
