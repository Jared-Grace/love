import { js_imports_unused_remove } from "./js_imports_unused_remove.mjs";
import { marker } from "./marker.mjs";
import { function_imports_add } from "./function_imports_add.mjs";
import { function_imports_missing } from "./function_imports_missing.mjs";
import { file_js_unparse } from "./file_js_unparse.mjs";
export async function function_imports_fix(f_name) {
  marker("1");
  let parsed = await function_imports_missing(f_name);
  let { imports_missing, ast } = parsed;
  await js_imports_unused_remove(ast);
  await function_imports_add(ast, imports_missing);
  await file_js_unparse(parsed);
}
