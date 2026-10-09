import { arguments_assert } from "./arguments_assert.mjs";
import { js_keyword_while } from "./js_keyword_while.mjs";
import { js_code_keyword_block_lines_multiple } from "./js_code_keyword_block_lines_multiple.mjs";
export function js_code_while_lines(condition, statement) {
  arguments_assert(arguments, 2);
  ("a while around one line, as the three lines it is written on: while (condition) {, the line pushed in by two spaces, and the closing brace");
  ("Written the way an if is, by the same builder, so the two look alike line for line and the only change a learner sees is the word.");
  let keyword = js_keyword_while();
  let lines = js_code_keyword_block_lines_multiple(keyword, condition, [
    statement,
  ]);
  return lines;
}
