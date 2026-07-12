import { function_imports_add } from "./function_imports_add.mjs";
import { js_imports_missing_all } from "./js_imports_missing_all.mjs";
export async function js_imports_missing_add_all(ast) {
  let imports_missing = await js_imports_missing_all(ast);
  await function_imports_add(ast, imports_missing);
}
