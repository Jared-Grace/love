import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { git_history_folder_bytes } from "./git_history_folder_bytes.mjs";
import { findings_folder } from "./findings_folder.mjs";
import { path_join } from "./path_join.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { list_size } from "./list_size.mjs";
import { list_take } from "./list_take.mjs";
export async function git_history_folder_bytes_report(folder) {
  "$plain folder";
  "Files what every folder in the history weighs and hands back the heaviest few, so the question of what to stop keeping can be looked at rather than scrolled through.";
  "The whole ranking goes to a file and only the top of it comes back, for the same reason its neighbour does that: cutting the list down before writing it would throw away the part the next question needs.";
  "The findings folder rather than the data folder, because this is a record of what a reading turned up on one day and nothing in the present depends on it.";
  arguments_assert(arguments, 1);
  let ranked = await git_history_folder_bytes(folder);
  let folders = list_size(ranked);
  let v = findings_folder();
  let f_name = fn_name("git_history_folder_bytes");
  let combined = text_combine_multiple([f_name, ".json"]);
  let file_path = path_join([v, combined]);
  await file_overwrite_json(file_path, ranked);
  let heaviest = list_take(ranked, 30);
  let r = {
    folders,
    file_path,
    heaviest,
  };
  return r;
}
