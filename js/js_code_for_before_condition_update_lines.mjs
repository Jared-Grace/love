import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { js_keyword_for } from "./js_keyword_for.mjs";
import { list_last } from "./list_last.mjs";
import { text_without_ending } from "./text_without_ending.mjs";
import { list_size } from "./list_size.mjs";
import { subtract } from "./subtract.mjs";
import { list_take } from "./list_take.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { js_code_keyword_block_lines_multiple } from "./js_code_keyword_block_lines_multiple.mjs";
export function js_code_for_before_condition_update_lines(
  before,
  condition,
  statements,
) {
  arguments_assert(arguments, 3);
  ("a for with its last line moved up after its second semicolon, as the lines it is written on: for (before; condition; last) {, each other line pushed in by two spaces, and the closing brace. before is the words before the first semicolon, and may be empty. Handed the same statements as ",
    fn_name("js_code_for_condition_lines"),
    ", so one program can be written each way");
  let keyword = js_keyword_for();
  let last = list_last(statements);
  let update = text_without_ending(last, ";");
  let left = list_size(statements);
  let count = subtract(left, 1);
  let staying = list_take(statements, count);
  let inside = text_combine_multiple([before, "; ", condition, "; ", update]);
  let lines = js_code_keyword_block_lines_multiple(keyword, inside, staying);
  return lines;
}
