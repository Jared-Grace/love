import { function_name_to_path } from "./function_name_to_path.mjs";
import { file_read } from "./file_read.mjs";
import { equal } from "./equal.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function function_code_transform(f_name, transformed_of) {
  "Rewrite one function's file by handing its source to something that returns new source, and say whether that changed anything.";
  "Nothing is written when nothing changed. A file that came back identical would otherwise be rewritten byte for byte, which marks every file in the repo as modified for no gain and buries the real changes among them.";
  let f_path = await function_name_to_path(f_name);
  let code = await file_read(f_path);
  let code_new = transformed_of(code);
  let same = equal(code, code_new);
  if (same) {
    let unchanged = {
      name: f_name,
      changed: false,
    };
    return unchanged;
  }
  await file_overwrite(f_path, code_new);
  let r = {
    name: f_name,
    changed: true,
  };
  return r;
}
