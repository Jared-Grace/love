import { js_imports_paths_fix_inner } from "./js_imports_paths_fix_inner.mjs";
import { functions_names_to_paths } from "./functions_names_to_paths.mjs";
export async function js_imports_paths_fix(ast) {
  let dictionary = await functions_names_to_paths();
  js_imports_paths_fix_inner(ast, dictionary);
}
