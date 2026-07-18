import { functions_names_to_paths } from "./functions_names_to_paths.mjs";
import { import_from_dir_root } from "./import_from_dir_root.mjs";
import { js_imports_missing_all_program } from "./js_imports_missing_all_program.mjs";
import { function_imports_add_relative } from "./function_imports_add_relative.mjs";
export function example_imports_lambda() {
  async function lambda(ast) {
    let dict = await functions_names_to_paths();
    let from_dir = import_from_dir_root();
    let missing = await js_imports_missing_all_program(ast);
    await function_imports_add_relative(ast, missing, dict, from_dir);
  }
  return lambda;
}
