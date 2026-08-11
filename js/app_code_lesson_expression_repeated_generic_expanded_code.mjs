import { arguments_assert } from "./arguments_assert.mjs";
import { text_to } from "./text_to.mjs";
import { range_map } from "./range_map.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_join } from "./list_join.mjs";
export function app_code_lesson_expression_repeated_generic_expanded_code(
  left,
  count,
  expand_symbol,
) {
  arguments_assert(arguments, 3);
  ("the short form written out in full - with a left number of 2 and a count of 3, three 2s joined by the smaller operator");
  function left_text(index) {
    let t = text_to(left);
    return t;
  }
  let repeats = range_map(count, left_text);
  let separator = text_combine_multiple([" ", expand_symbol, " "]);
  let expanded = list_join(repeats, separator);
  return expanded;
}
