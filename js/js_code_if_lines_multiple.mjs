import { js_keyword_if } from "./js_keyword_if.mjs";
import { js_code_keyword_block_lines_multiple } from "./js_code_keyword_block_lines_multiple.mjs";
export function js_code_if_lines_multiple(condition, statements) {
  "an if around several lines, as the lines it is written on: if (condition) {, each line pushed in by two spaces, and the closing brace";
  let keyword = js_keyword_if();
  let lines = js_code_keyword_block_lines_multiple(
    keyword,
    condition,
    statements,
  );
  return lines;
}
