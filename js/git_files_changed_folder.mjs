import { git_folder_run } from "./git_folder_run.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_filter_text_empty_not_is } from "./list_filter_text_empty_not_is.mjs";
import { list_map } from "./list_map.mjs";
import { git_status_line_path } from "./git_status_line_path.mjs";
export async function git_files_changed_folder(folder, paths) {
  "Of the files handed in, which ones this folder actually has a change to commit.";
  "Asking git rather than deciding here is what makes the answer usable: a path it";
  "does not name is one it would refuse to add — outside the folder, ignored, or";
  "already committed by someone else a moment ago — and the names it gives back are";
  "spelled the way it wants them, so nothing has to be converted afterwards.";
  "An empty answer is the honest report that there is nothing to commit, which is a";
  "different thing from a commit that quietly did nothing.";
  "no paths has to be answered here rather than passed on. Asked about nothing, git answers about everything, so handing an empty list straight through turns a commit that should touch no files into one that sweeps the folder — under a message naming a command that wrote none of it";
  let none = list_empty_is(paths);
  if (none) {
    let nothing = [];
    return nothing;
  }
  let asked = ["status", "--porcelain", "--"].concat(paths);
  let stdout = await git_folder_run(folder, asked);
  let lines = text_split_newline(stdout);
  let filled = list_filter_text_empty_not_is(lines);
  let changed = list_map(filled, git_status_line_path);
  return changed;
}
