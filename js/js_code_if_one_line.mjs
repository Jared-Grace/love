import { arguments_assert } from "./arguments_assert.mjs";
import { js_keyword_if } from "./js_keyword_if.mjs";
import { js_code_wrap_parenthesis } from "./js_code_wrap_parenthesis.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function js_code_if_one_line(condition, statement) {
  arguments_assert(arguments, 2);
  ("an if around one line, written on one line, for a sentence to name it whole: if (condition) { statement }");
  let keyword = js_keyword_if();
  let wrapped = js_code_wrap_parenthesis(condition);
  let code = text_combine_multiple([
    keyword,
    " ",
    wrapped,
    " { ",
    statement,
    " }",
  ]);
  return code;
}
