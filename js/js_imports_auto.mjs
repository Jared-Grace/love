import { arguments_assert } from "./arguments_assert.mjs";
import { js_imports_auto_at } from "./js_imports_auto_at.mjs";
import { folder_src } from "./folder_src.mjs";
export async function js_imports_auto(ast) {
  arguments_assert(arguments, 1);
  await js_imports_auto_at(ast, folder_src());
}
