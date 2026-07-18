import { functions_names_to_paths } from "./functions_names_to_paths.mjs";
import { import_from_dir_root } from "./import_from_dir_root.mjs";
import { js_imports_auto_relative } from "./js_imports_auto_relative.mjs";
export function example_auto_lambda() {
  async function lambda(ast) {
    let dict = await functions_names_to_paths();
    let from_dir = import_from_dir_root();
    await js_imports_auto_relative(ast, dict, from_dir);
  }
  return lambda;
}
