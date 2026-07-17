import { arguments_assert } from "./arguments_assert.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { js_flo_name } from "./js_flo_name.mjs";
import { path_directory } from "./path_directory.mjs";
import { path_join } from "./path_join.mjs";
import { folder_previous } from "./folder_previous.mjs";
import { repo_current_name } from "./repo_current_name.mjs";
import { folder_src } from "./folder_src.mjs";
export function import_from_dir(ast, dictionary) {
  arguments_assert(arguments, 2);
  let f_name = js_flo_name(ast);
  let own = property_get_or_null(dictionary, f_name);
  if (own) {
    let dir = path_directory(own);
    return dir;
  }
  let fallback = path_join([folder_previous(), repo_current_name(), folder_src()]);
  return fallback;
}
