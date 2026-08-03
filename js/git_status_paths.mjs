import { text_split_newline } from "./text_split_newline.mjs";
import { list_filter_text_empty_not_is } from "./list_filter_text_empty_not_is.mjs";
import { list_map } from "./list_map.mjs";
import { git_status_line_path } from "./git_status_line_path.mjs";
export function git_status_paths(stdout) {
  "The paths named by a run of git status in its short form, read out of what that run printed.";
  "Every caller of that run wants the same three steps afterwards - cut it into lines, drop the blank one the last newline leaves behind, and take the path off the front of each. Written out at each call site they were a place for the three to drift apart, and the last of them is a small parser that only one file should be holding.";
  let lines = text_split_newline(stdout);
  let filled = list_filter_text_empty_not_is(lines);
  let paths = list_map(filled, git_status_line_path);
  return paths;
}
