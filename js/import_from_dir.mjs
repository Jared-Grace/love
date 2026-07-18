import { arguments_assert } from "./arguments_assert.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { js_flo_name } from "./js_flo_name.mjs";
import { path_directory } from "./path_directory.mjs";
import { import_from_dir_root } from "./import_from_dir_root.mjs";
export function import_from_dir(ast, dictionary) {
  arguments_assert(arguments, 2);
  let f_name = js_flo_name(ast);
  let own = property_get_or_null(dictionary, f_name);
  if (own) {
    let dir = path_directory(own);
    return dir;
  }
  let fallback = import_from_dir_root();
  return fallback;
}
