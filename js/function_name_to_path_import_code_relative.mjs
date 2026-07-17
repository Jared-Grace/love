import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_import_single } from "./js_code_import_single.mjs";
import { function_name_to_path_import_relative } from "./function_name_to_path_import_relative.mjs";
import { text_is_assert_json } from "./text_is_assert_json.mjs";
export function function_name_to_path_import_code_relative(import_, dictionary, from_dir) {
  arguments_assert(arguments, 3);
  text_is_assert_json(import_, {
    hint: "the import name should be text so its path can be found — did an empty or non-text value arrive?",
    import_,
  });
  let from = function_name_to_path_import_relative(import_, dictionary, from_dir);
  let code = js_code_import_single(import_, from);
  return code;
}
