import { js_imports_missing_specify } from "../../../love/public/src/js_imports_missing_specify.mjs";
import { functions_names } from "../../../love/public/src/functions_names.mjs";
import { function_imports_add } from "../../../love/public/src/function_imports_add.mjs";
export async function js_imports_missing_add_specified(ast) {
  let f_names = await functions_names();
  let imports_missing = js_imports_missing_specify(ast, f_names);
  await function_imports_add(ast, imports_missing);
}
