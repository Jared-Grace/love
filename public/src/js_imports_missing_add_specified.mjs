import { list_empty_is } from "../../../love/public/src/list_empty_is.mjs";
import { js_imports_missing_specify } from "../../../love/public/src/js_imports_missing_specify.mjs";
import { function_imports_add } from "../../../love/public/src/function_imports_add.mjs";
export async function js_imports_missing_add_specified(ast, f_names_specified) {
  let e = list_empty_is(f_names_specified);
  if (e) {
    return;
  }
  let imports_missing = js_imports_missing_specify(ast, f_names_specified);
  await function_imports_add(ast, imports_missing);
}
