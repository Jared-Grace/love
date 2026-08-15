import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { git_history_paths_absent_at_head } from "./git_history_paths_absent_at_head.mjs";
import { findings_folder } from "./findings_folder.mjs";
import { path_join } from "./path_join.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { list_map } from "./list_map.mjs";
import { list_sum } from "./list_sum.mjs";
import { list_size } from "./list_size.mjs";
import { list_take } from "./list_take.mjs";
export async function git_history_paths_absent_at_head_report(folder) {
  "Files the whole ranking of paths history carries and HEAD does not, and hands back what it weighs with only the heaviest few named.";
  "The ranking runs to thousands of paths and no reader wants thousands, but cutting it down before it is written would throw away the part a later question needs. So the whole of it goes to a file and the answer carries the file's name - a reader who wants more knows where it is, and nobody is handed a wall.";
  "The findings folder rather than the data folder, because this is a record of what a reading turned up on one day and nothing in the present depends on it.";
  arguments_assert(arguments, 1);
  let ranked = await git_history_paths_absent_at_head(folder);
  function git_history_paths_absent_at_head_report_bytes(row) {
    let n = row.bytes;
    return n;
  }
  let every = list_map(ranked, git_history_paths_absent_at_head_report_bytes);
  let bytes = list_sum(every);
  let paths = list_size(ranked);
  let v = findings_folder();
  let file_path = path_join([
    v,
    text_combine_multiple([
      fn_name("git_history_paths_absent_at_head"),
      ".json",
    ]),
  ]);
  await file_overwrite_json(file_path, ranked);
  let heaviest = list_take(ranked, 40);
  let r = {
    paths,
    bytes,
    file_path,
    heaviest,
  };
  return r;
}
