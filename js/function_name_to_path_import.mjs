import { js_code_string } from "./js_code_string.mjs";
import { property_get } from "./property_get.mjs";
import { path_join } from "./path_join.mjs";
import { path_relative } from "./path_relative.mjs";
import { folder_previous } from "./folder_previous.mjs";
import { folder_src } from "./folder_src.mjs";
import { repo_current_name } from "./repo_current_name.mjs";
export function function_name_to_path_import(import_, dictionary) {
  let value = property_get(dictionary, import_);
  let from_dir = path_join([folder_previous(), repo_current_name(), folder_src()]);
  let relative = path_relative(from_dir, value);
  let c = js_code_string(relative);
  return c;
}
