import { js_list_type } from "./js_list_type.mjs";
export function js_imports_all(ast) {
  let imports = js_list_type(ast, "ImportDeclaration");
  return imports;
}
