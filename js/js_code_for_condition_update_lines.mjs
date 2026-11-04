import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_keyword_for } from "./js_keyword_for.mjs";
import { list_last } from "./list_last.mjs";
import { text_without_ending } from "./text_without_ending.mjs";
import { subtract } from "./subtract.mjs";
import { list_size } from "./list_size.mjs";
import { list_take } from "./list_take.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { js_code_keyword_block_lines_multiple } from "./js_code_keyword_block_lines_multiple.mjs";
export function js_code_for_condition_update_lines(condition, statements) {
  arguments_assert(arguments, 2);
  ("a for with its last line moved up after its second semicolon, as the lines it is written on: for (; condition; last) {, each other line pushed in by two spaces, and the closing brace. Handed the same two things as ",
    fn_name("js_code_for_condition_lines"),
    ", so one program can be written both ways");
  let keyword = js_keyword_for();
  let last = list_last(statements);
  let update = text_without_ending(last, ";");
  let left = list_size(statements);
  let count = subtract(left, 1);
  let staying = list_take(statements, count);
  let inside = text_combine_multiple(["; ", condition, "; ", update]);
  let lines = js_code_keyword_block_lines_multiple(keyword, inside, staying);
  return lines;
}
