import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_string } from "./js_code_string.mjs";
import { property_get } from "./property_get.mjs";
import { path_relative } from "./path_relative.mjs";
export function function_name_to_path_import_relative(import_, dictionary, from_dir) {
  arguments_assert(arguments, 3);
  let value = property_get(dictionary, import_);
  let relative = path_relative(from_dir, value);
  let c = js_code_string(relative);
  return c;
}
