import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_string } from "./js_code_string.mjs";
import { path_relative } from "./path_relative.mjs";
import { path_join } from "./path_join.mjs";
import { folder_src } from "./folder_src.mjs";
import { function_name_extension } from "./function_name_extension.mjs";
import { text_combine } from "./text_combine.mjs";
export function function_name_to_path_import_at(import_, base_dir) {
  arguments_assert(arguments, 2);
  let file_name = text_combine(import_, function_name_extension());
  let target = path_join([folder_src(), file_name]);
  let relative = path_relative(base_dir, target);
  let c = js_code_string(relative);
  return c;
}
