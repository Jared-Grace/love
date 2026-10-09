import { js_keyword_else } from "./js_keyword_else.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function js_code_else_one_line(insides) {
  "else { insides } on one line, so a sentence can name an else by a line inside it";
  let keyword = js_keyword_else();
  let line = text_combine_multiple([keyword, " { ", insides, " }"]);
  return line;
}
