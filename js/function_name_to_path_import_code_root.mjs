import { js_code_import_single } from "./js_code_import_single.mjs";
import { function_name_to_path_import_root } from "./function_name_to_path_import_root.mjs";
import { text_is_assert_json } from "./text_is_assert_json.mjs";
export function function_name_to_path_import_code_root(import_, dictionary) {
  text_is_assert_json(import_, {
    hint: "the import name should be text so its root path can be found — did an empty or non-text value arrive?",
    import_,
  });
  let from = function_name_to_path_import_root(import_, dictionary);
  let code = js_code_import_single(import_, from);
  return code;
}
