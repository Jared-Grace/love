import { object_replace } from "./object_replace.mjs";
import { js_code_braces_empty } from "./js_code_braces_empty.mjs";
import { js_code_wrap_parenthesis } from "./js_code_wrap_parenthesis.mjs";
import { js_keyword_if } from "./js_keyword_if.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
import { marker } from "./marker.mjs";
export function js_dollar_ie({ stack1 }) {
  let from = js_parse_statement(
    js_keyword_if() +
      " " +
      js_code_wrap_parenthesis("false") +
      js_code_braces_empty(),
  );
  object_replace(stack1, from);
}
