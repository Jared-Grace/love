import { list_add } from "./list_add.mjs";
import { js_code_arrow } from "./js_code_arrow.mjs";
import { object_replace } from "./object_replace.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
export function js_dollar_f({ node, afters }) {
  const code = js_code_arrow();
  let parsed = js_parse_expression(code);
  list_add(afters, lambda);
  function lambda() {
    object_replace(node, parsed);
  }
}
