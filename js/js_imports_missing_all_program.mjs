import { js_imports_missing_specify_program } from "./js_imports_missing_specify_program.mjs";
import { functions_names } from "./functions_names.mjs";
export async function js_imports_missing_all_program(ast) {
  let f_names = await functions_names();
  let imports_missing = js_imports_missing_specify_program(ast, f_names);
  return imports_missing;
}
