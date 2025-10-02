import { js_imports_paths_fix_inner } from "../../../karate_code/public/src/js_imports_paths_fix_inner.mjs";
import { functions_names_to_paths } from "../../../love/public/src/functions_names_to_paths.mjs";
export async function js_imports_paths_fix(ast) {
  let dictionary = await functions_names_to_paths();
  js_imports_paths_fix_inner(ast, dictionary);
}
