import { js_comments_left_count } from "./js_comments_left_count.mjs";
import { functions_names } from "./functions_names.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
import { file_read } from "./file_read.mjs";
import { js_code_comments_migrated } from "./js_code_comments_migrated.mjs";
import { equal } from "./equal.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function function_comments_migrate(f_name) {
  "Convert one function's slash comments into statements holding the same words, so that normalizing the file stops deleting them. Reports whether anything changed and says nothing else, because the caller sweeping a list wants to know which files it touched.";
  "Nothing is written when nothing changed. A file with no slash comments left would otherwise be rewritten byte for byte, which costs a modification to every file in the repo for no gain and buries the real changes among them.";
  let f_path = await function_name_to_path(f_name);
  let code = await file_read(f_path);
  let f_names = await functions_names();
  let migrated = js_code_comments_migrated(code, f_names);
  let left = js_comments_left_count(code);
  let same = equal(code, migrated);
  if (same) {
    let unchanged = {
      name: f_name,
      changed: false,
      left,
    };
    return unchanged;
  }
  await file_overwrite(f_path, migrated);
  let r = {
    name: f_name,
    changed: true,
    left,
  };
  return r;
}
