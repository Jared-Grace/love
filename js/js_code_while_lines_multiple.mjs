import { arguments_assert } from "./arguments_assert.mjs";
import { js_keyword_while } from "./js_keyword_while.mjs";
import { js_code_keyword_block_lines_multiple } from "./js_code_keyword_block_lines_multiple.mjs";
export function js_code_while_lines_multiple(condition, statements) {
  arguments_assert(arguments, 2);
  ("a while around several lines, as the lines it is written on: while (condition) {, each line pushed in by two spaces, and the closing brace");
  let keyword = js_keyword_while();
  let lines = js_code_keyword_block_lines_multiple(
    keyword,
    condition,
    statements,
  );
  return lines;
}
