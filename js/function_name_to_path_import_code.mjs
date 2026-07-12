import { js_code_import_single } from "./js_code_import_single.mjs";
import { function_name_to_path_import } from "./function_name_to_path_import.mjs";
import { text_is_assert } from "./text_is_assert.mjs";
export function function_name_to_path_import_code(import_, dictionary) {
  text_is_assert(import_);
  let from = function_name_to_path_import(import_, dictionary);
  let code = js_code_import_single(import_, from);
  return code;
}
