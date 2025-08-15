import { object_replace } from "./object_replace.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
export function js_dollar_f({ remaining, node, stack1, ast, afters }) {
  let parsed = js_parse_expression(code);
  object_replace(node, parsed);
}
