import { js_imports_missing_specify } from "../../../love/public/src/js_imports_missing_specify.mjs";
import { functions_names } from "../../../love/public/src/functions_names.mjs";
export async function js_imports_missing_all(ast) {
  let f_names = await functions_names();
  let imports_missing = js_imports_missing_specify(ast, f_names);
  return imports_missing;
}
