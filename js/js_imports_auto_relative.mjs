import { arguments_assert } from "./arguments_assert.mjs";
import { js_imports_missing_all_program } from "./js_imports_missing_all_program.mjs";
import { function_imports_add_relative } from "./function_imports_add_relative.mjs";
import { js_imports_unused_remove } from "./js_imports_unused_remove.mjs";
import { js_imports_paths_fix_from } from "./js_imports_paths_fix_from.mjs";
export async function js_imports_auto_relative(ast, dictionary, from_dir) {
  arguments_assert(arguments, 3);
  let missing = await js_imports_missing_all_program(ast);
  await function_imports_add_relative(ast, missing, dictionary, from_dir);
  js_imports_unused_remove(ast);
  js_imports_paths_fix_from(ast, dictionary, from_dir);
}
