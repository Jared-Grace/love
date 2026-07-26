import { function_name_to_path } from "./function_name_to_path.mjs";
import { file_read } from "./file_read.mjs";
import { js_code_top_level_templates_flattened } from "./js_code_top_level_templates_flattened.mjs";
import { equal } from "./equal.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function function_top_level_templates_flatten(f_name) {
  "Turn one function file's top-of-file template comments back into plain strings, and say whether anything changed.";
  let f_path = await function_name_to_path(f_name);
  let code = await file_read(f_path);
  let flattened = js_code_top_level_templates_flattened(code);
  let same = equal(code, flattened);
  if (same) {
    let unchanged = {
      name: f_name,
      changed: false,
    };
    return unchanged;
  }
  await file_overwrite(f_path, flattened);
  let r = {
    name: f_name,
    changed: true,
  };
  return r;
}
