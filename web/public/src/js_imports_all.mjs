import { js_list_type } from "../../../love/public/src/js_list_type.mjs";
export function js_imports_all(ast) {
  const imports = js_list_type(ast, "ImportDeclaration");
  return imports;
}
