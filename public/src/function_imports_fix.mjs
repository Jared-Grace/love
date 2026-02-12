import { function_imports_add_missing } from "../../../love/public/src/function_imports_add_missing.mjs";
import { js_imports_unused_remove } from "../../../love/public/src/js_imports_unused_remove.mjs";
import { function_imports_missing } from "../../../love/public/src/function_imports_missing.mjs";
import { file_js_unparse } from "../../../love/public/src/file_js_unparse.mjs";
export async function function_imports_fix(f_name) {
  let parsed = await function_imports_missing(f_name);
  let ast = await function_imports_add_missing(parsed);
  await js_imports_unused_remove(ast);
  await file_js_unparse(parsed);
}
