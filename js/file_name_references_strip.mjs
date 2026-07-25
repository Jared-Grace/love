import { arguments_assert } from "./arguments_assert.mjs";
import { file_js_transform } from "./file_js_transform.mjs";
import { functions_names_to_paths } from "./functions_names_to_paths.mjs";
import { import_from_dir_path } from "./import_from_dir_path.mjs";
import { js_fn_name_references_to_calls } from "./js_fn_name_references_to_calls.mjs";
import { js_imports_auto_relative } from "./js_imports_auto_relative.mjs";
export async function file_name_references_strip(f_path) {
  arguments_assert(arguments, 1);
  ("Make a file bundle-safe: rewrite each imported-fn name reference to the");
  ("dependency-free marker, then auto-fix imports (drop the now-unused fn imports,");
  ("add the marker's). Run on a page bundled for the web that imports a fn only for");
  ("its name — that lone reference otherwise drags the fn's whole tree into the bundle.");
  let dictionary = await functions_names_to_paths();
  let from_dir = import_from_dir_path(f_path);
  async function lambda(ast) {
    await js_fn_name_references_to_calls(ast);
    await js_imports_auto_relative(ast, dictionary, from_dir);
  }
  await file_js_transform(f_path, lambda);
}
