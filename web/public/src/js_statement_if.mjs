import { js_code_braces_empty } from "../../../love/public/src/js_code_braces_empty.mjs";
import { js_code_wrap_parenthesis } from "../../../love/public/src/js_code_wrap_parenthesis.mjs";
import { js_keyword_if } from "../../../love/public/src/js_keyword_if.mjs";
import { js_parse_statement } from "../../../love/public/src/js_parse_statement.mjs";
import { js_keyword_false } from "../../../love/public/src/js_keyword_false.mjs";
export function js_statement_if() {
  let inside = js_keyword_false();
  let from = js_parse_statement(
    js_keyword_if() +
      " " +
      js_code_wrap_parenthesis(inside) +
      js_code_braces_empty(),
  );
  return from;
}
