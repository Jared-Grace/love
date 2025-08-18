import { js_unparse } from "./js_unparse.mjs";
import { js_call_new_code } from "./js_call_new_code.mjs";
import { log_unparse } from "./log_unparse.mjs";
import { object_property_set } from "./object_property_set.mjs";
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
import { equal } from "./equal.mjs";
export async function js_dollar_ie({ stack1, ast }) {
  js_dollar_i({
    stack1,
  });
  let { code } = await js_call_new_code(equal.name, ast);
  let code2 = await js_unparse(ast2);
  object_property_set(stack1, "test", parsed);
  await log_unparse(stack1);
}
