import { arguments_assert } from "./arguments_assert.mjs";
import { file_js_transform } from "./file_js_transform.mjs";
import { functions_names_to_paths } from "./functions_names_to_paths.mjs";
import { import_from_dir_path } from "./import_from_dir_path.mjs";
import { js_imports_missing_all_program } from "./js_imports_missing_all_program.mjs";
import { function_imports_add_relative } from "./function_imports_add_relative.mjs";
export async function file_imports_repair(f_path) {
  arguments_assert(arguments, 1);
  let dictionary = await functions_names_to_paths();
  let from_dir = import_from_dir_path(f_path);
  async function lambda(ast) {
    let missing = await js_imports_missing_all_program(ast);
    await function_imports_add_relative(ast, missing, dictionary, from_dir);
  }
  await file_js_transform(f_path, lambda);
}
