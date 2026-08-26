import { js_list_type_module_item } from "./js_list_type_module_item.mjs";
export function js_imports_all(ast) {
  let imports = js_list_type_module_item(ast, "ImportDeclaration");
  return imports;
}
