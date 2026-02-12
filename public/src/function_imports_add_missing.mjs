import { function_imports_add } from "../../../love/public/src/function_imports_add.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export async function function_imports_add_missing(parsed) {
  let ast = property_get(parsed, "ast");
  let imports_missing = property_get(parsed, "imports_missing");
  await function_imports_add(ast, imports_missing);
  return ast;
}
