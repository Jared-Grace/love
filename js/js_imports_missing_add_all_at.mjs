import { arguments_assert } from "./arguments_assert.mjs";
import { js_imports_missing_all } from "./js_imports_missing_all.mjs";
import { function_imports_add_at } from "./function_imports_add_at.mjs";
export async function js_imports_missing_add_all_at(ast, base_dir) {
  arguments_assert(arguments, 2);
  let imports_missing = await js_imports_missing_all(ast);
  function_imports_add_at(ast, imports_missing, base_dir);
}
