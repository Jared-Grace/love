import { arguments_assert } from "./arguments_assert.mjs";
import { js_imports_missing_add_all_program_at } from "./js_imports_missing_add_all_program_at.mjs";
import { js_imports_unused_remove } from "./js_imports_unused_remove.mjs";
import { js_imports_paths_fix_at } from "./js_imports_paths_fix_at.mjs";
export async function js_imports_auto_at(ast, base_dir) {
  arguments_assert(arguments, 2);
  await js_imports_missing_add_all_program_at(ast, base_dir);
  js_imports_unused_remove(ast);
  js_imports_paths_fix_at(ast, base_dir);
}
