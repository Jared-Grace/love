import { js_fn_name_references_to_calls } from "./js_fn_name_references_to_calls.mjs";
import { functions_names_to_paths } from "./functions_names_to_paths.mjs";
import { import_from_dir_root } from "./import_from_dir_root.mjs";
import { js_imports_auto_relative } from "./js_imports_auto_relative.mjs";
export function example_fn_name_references_lambda() {
  ("Shows the whole useful operation, the way ao would finish it: strip each");
  ("imported-fn name-reference to the dependency-free marker, then auto-fix imports");
  ("(drop the now-unused fn import, add the marker's).");
  async function lambda(ast) {
    await js_fn_name_references_to_calls(ast);
    let dict = await functions_names_to_paths();
    let from_dir = import_from_dir_root();
    await js_imports_auto_relative(ast, dict, from_dir);
  }
  return lambda;
}
