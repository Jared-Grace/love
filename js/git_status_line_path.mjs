import { text_split_last } from "./text_split_last.mjs";
import { text_slice_from } from "./text_slice_from.mjs";
import { text_includes } from "./text_includes.mjs";
export function git_status_line_path(line) {
  "A short status line is two letters of state, a space, then the path. A file";
  "that moved is written as the old name, an arrow, then the new one, and the new";
  "name is the one that exists to be committed.";
  let after_state = text_slice_from(line, 3);
  let arrow = " -> ";
  let moved = text_includes(after_state, arrow);
  if (moved) {
    let last = text_split_last(after_state, arrow);
    return last;
  }
  return after_state;
}
