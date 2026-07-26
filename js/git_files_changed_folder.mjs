import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_filter_text_empty_not_is } from "./list_filter_text_empty_not_is.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_map } from "./list_map.mjs";
import { command_line_git_folder } from "./command_line_git_folder.mjs";
import { git_status_line_path } from "./git_status_line_path.mjs";
export async function git_files_changed_folder(folder, paths) {
  "Of the files handed in, which ones this folder actually has a change to commit.";
  "Asking git rather than deciding here is what makes the answer usable: a path it";
  "does not name is one it would refuse to add — outside the folder, ignored, or";
  "already committed by someone else a moment ago — and the names it gives back are";
  "spelled the way it wants them, so nothing has to be converted afterwards.";
  "An empty answer is the honest report that there is nothing to commit, which is a";
  "different thing from a commit that quietly did nothing.";
  let listed = list_join_space(paths);
  let command = text_combine_multiple(["status --porcelain -- ", listed]);
  let stdout = await command_line_git_folder(folder, command);
  let lines = text_split_newline(stdout);
  let filled = list_filter_text_empty_not_is(lines);
  let changed = list_map(filled, git_status_line_path);
  return changed;
}
