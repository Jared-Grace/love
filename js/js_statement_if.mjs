import { js_code_braces_empty } from "./js_code_braces_empty.mjs";
import { js_code_wrap_parenthesis } from "./js_code_wrap_parenthesis.mjs";
import { js_keyword_if } from "./js_keyword_if.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function js_statement_if() {
  let inside = js_keyword_false();
  let statement_if = js_parse_statement(
    text_combine_multiple([
      js_keyword_if(),
      " ",
      js_code_wrap_parenthesis(inside),
      js_code_braces_empty(),
    ]),
  );
  return statement_if;
}
