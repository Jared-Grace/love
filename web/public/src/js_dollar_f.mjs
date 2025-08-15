import { js_code_braces_empty } from "./js_code_braces_empty.mjs";
import { js_code_parenthesis_open_close } from "./js_code_parenthesis_open_close.mjs";
import { object_replace } from "./object_replace.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
export function js_dollar_f({ remaining, node, stack1, ast, afters }) {
  let code_expression = js_code_parenthesis_open_close();
  let parsed = js_parse_expression(code_expression + js_code_braces_empty());
  object_replace(node, parsed);
}
