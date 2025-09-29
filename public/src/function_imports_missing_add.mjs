import { function_imports_add } from "../../../love/public/src/function_imports_add.mjs";
import { function_imports_missing } from "../../../love/public/src/function_imports_missing.mjs";
import { file_js_unparse } from "../../../love/public/src/file_js_unparse.mjs";
export async function function_imports_missing_add(f_name) {
  let parsed = await function_imports_missing(f_name);
  let { imports_missing, ast } = parsed;
  await function_imports_add(ast, imports_missing);
  await file_js_unparse(parsed);
}
