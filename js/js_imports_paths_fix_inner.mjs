import { js_imports_paths_fix_from } from "./js_imports_paths_fix_from.mjs";
import { import_from_dir } from "./import_from_dir.mjs";
export async function js_imports_paths_fix_inner(ast, dictionary) {
  let from_dir = await import_from_dir(ast, dictionary);
  js_imports_paths_fix_from(ast, dictionary, from_dir);
}
