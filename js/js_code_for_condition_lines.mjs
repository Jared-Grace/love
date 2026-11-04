import { arguments_assert } from "./arguments_assert.mjs";
import { js_keyword_for } from "./js_keyword_for.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { js_code_keyword_block_lines_multiple } from "./js_code_keyword_block_lines_multiple.mjs";
export function js_code_for_condition_lines(condition, statements) {
  arguments_assert(arguments, 2);
  ("a for holding only its condition around its lines, as the lines it is written on: for (; condition;) {, each line pushed in by two spaces, and the closing brace");
  ("2026-11-01, for the first for lesson: written by the builder a while is written by, so the for and the while it does the same as look alike line for line, and the only change a learner sees is the word and the two semicolons");
  let keyword = js_keyword_for();
  let inside = text_combine_multiple(["; ", condition, ";"]);
  let lines = js_code_keyword_block_lines_multiple(keyword, inside, statements);
  return lines;
}
