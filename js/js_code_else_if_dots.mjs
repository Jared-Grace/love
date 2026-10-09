import { js_keyword_else } from "./js_keyword_else.mjs";
import { js_code_if_dots } from "./js_code_if_dots.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function js_code_else_if_dots(condition) {
  "an else if with its lines left out as three dots, written on one line, for a sentence to name it: else if (condition) { ... }";
  let keyword = js_keyword_else();
  let if_dots = js_code_if_dots(condition);
  let code = text_combine_multiple([keyword, " ", if_dots]);
  return code;
}
