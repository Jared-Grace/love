import { js_comments_left_count } from "./js_comments_left_count.mjs";
import { functions_names } from "./functions_names.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
import { file_read } from "./file_read.mjs";
import { js_code_comments_migrated } from "./js_code_comments_migrated.mjs";
import { function_code_transform } from "./function_code_transform.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
export async function function_comments_migrate(f_name) {
  "Convert one function's slash comments into statements holding the same words, so that normalizing the file stops deleting them. Reports whether anything changed, and how many comments could not be carried across, because the caller sweeping a list needs both.";
  let f_names = await functions_names();
  function migrated_of(code) {
    let migrated = js_code_comments_migrated(code, f_names);
    return migrated;
  }
  let result = await function_code_transform(f_name, migrated_of);
  let f_path = await function_name_to_path(f_name);
  let code = await file_read(f_path);
  let left = js_comments_left_count(code);
  let r = object_merge_set(
    {
      left,
    },
    result,
  );
  return r;
}
