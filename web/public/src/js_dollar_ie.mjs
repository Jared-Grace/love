import { js_call_new } from "./js_call_new.mjs";
import { log } from "./log.mjs";
import { js_dollar_i } from "./js_dollar_i.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
import { object_replace } from "./object_replace.mjs";
import { js_code_braces_empty } from "./js_code_braces_empty.mjs";
import { js_code_wrap_parenthesis } from "./js_code_wrap_parenthesis.mjs";
import { js_keyword_if } from "./js_keyword_if.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
import { marker } from "./marker.mjs";
export async function js_dollar_ie({ stack1 }) {
  js_dollar_i({
    stack1,
  });
  let { test } = stack1;
  let { declaration, parsed } = await js_call_new(f_name_call, ast);
}
