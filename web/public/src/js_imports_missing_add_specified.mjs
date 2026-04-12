import { function_imports_add } from "../../../love/public/src/function_imports_add.mjs";
import { js_imports_missing_all } from "../../../love/public/src/js_imports_missing_all.mjs";
export async function js_imports_missing_add_specified(ast) {
  let imports_missing = await js_imports_missing_all(ast);
  await function_imports_add(ast, imports_missing);
}
