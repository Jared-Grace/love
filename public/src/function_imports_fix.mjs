import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_imports_unused_remove } from "../../../love/public/src/js_imports_unused_remove.mjs";
import { function_imports_add } from "../../../love/public/src/function_imports_add.mjs";
import { function_imports_missing } from "../../../love/public/src/function_imports_missing.mjs";
import { file_js_unparse } from "../../../love/public/src/file_js_unparse.mjs";
export async function function_imports_fix(f_name) {
  let parsed = await function_imports_missing(f_name);
  let ast = property_get(parsed, "ast");
  let imports_missing = property_get(parsed, "imports_missing");
  await js_imports_unused_remove(ast);
  await function_imports_add(ast, imports_missing);
  await file_js_unparse(parsed);
}
