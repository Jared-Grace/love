import { text_split_newline } from "./text_split_newline.mjs";
import { list_first } from "./list_first.mjs";
import { text_includes } from "./text_includes.mjs";
import { not } from "./not.mjs";
import { text_replace } from "./text_replace.mjs";
import { list_skip } from "./list_skip.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function app_code_if_boolean_flipped(code) {
  "the same program with the name its first line sets holding the opposite: let a = true; becomes let a = false;, and false becomes true";
  let lines = text_split_newline(code);
  let first = list_first(lines);
  let held = text_includes(first, "true");
  let from = "true";
  let to = "false";
  if (not(held)) {
    from = "false";
    to = "true";
  }
  let first_after = text_replace(first, from, to);
  let rest = list_skip(lines, 1);
  let lines_after = list_concat([first_after], rest);
  let joined = list_join_newline(lines_after);
  return joined;
}
