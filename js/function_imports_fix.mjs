import { property_get } from "./property_get.mjs";
import { function_imports_add_missing } from "./function_imports_add_missing.mjs";
import { js_imports_unused_remove } from "./js_imports_unused_remove.mjs";
import { file_js_unparse } from "./file_js_unparse.mjs";
export async function function_imports_fix(f_name) {
  let r = await function_imports_add_missing(f_name);
  let parsed = property_get(r, "parsed");
  let ast = property_get(r, "ast");
  await js_imports_unused_remove(ast);
  await file_js_unparse(parsed);
}
