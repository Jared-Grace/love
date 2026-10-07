import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { js_code_if_lines } from "./js_code_if_lines.mjs";
import { list_first } from "./list_first.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { list_map } from "./list_map.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function app_code_if_condition_set(code, condition) {
  arguments_assert(arguments, 2);
  ("the same program with what is inside the if's parentheses replaced: the line that opens the if, the one starting if and a space, is written again around the new condition, and every other line is kept");
  let lines = text_split_newline(code);
  let opening = js_code_if_lines(condition, "");
  let opening_line = list_first(opening);
  function replaced(line) {
    if (text_starts_with(line, "if ")) {
      return opening_line;
    }
    return line;
  }
  let mapped = list_map(lines, replaced);
  let joined = list_join_newline(mapped);
  return joined;
}
