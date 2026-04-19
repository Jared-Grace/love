import { js_statement_return_add } from "../../../love/public/src/js_statement_return_add.mjs";
import { js_if_blockify_generic_node } from "../../../love/public/src/js_if_blockify_generic_node.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { js_code_arrow } from "../../../love/public/src/js_code_arrow.mjs";
import { object_replace } from "../../../love/public/src/object_replace.mjs";
import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
export function js_dollar_f({ node, afters }) {
  const code = js_code_arrow();
  let parsed = js_parse_expression(code);
  js_if_blockify_generic_node(parsed, "body", js_statement_return_add);
  list_add(afters, lambda);
  function lambda() {
    object_replace(node, parsed);
  }
}
