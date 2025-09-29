import { js_type } from "../../../love/public/src/js_type.mjs";
export function js_imports_all(ast) {
  const imports = js_type(ast, "ImportDeclaration");
  return imports;
}
