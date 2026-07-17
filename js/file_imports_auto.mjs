import { arguments_assert } from "./arguments_assert.mjs";
import { file_js_transform } from "./file_js_transform.mjs";
import { js_imports_auto_at } from "./js_imports_auto_at.mjs";
import { path_dirname } from "./path_dirname.mjs";
export async function file_imports_auto(f_path) {
  arguments_assert(arguments, 1);
  let base_dir = await path_dirname(f_path);
  async function lambda(ast) {
    await js_imports_auto_at(ast, base_dir);
  }
  await file_js_transform(f_path, lambda);
}
