import { js_statement_return_empty_add } from "../../../love/public/src/js_statement_return_empty_add.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_dollar_i } from "../../../love/public/src/js_dollar_i.mjs";
export function js_dollar_ir({
  remaining,
  node,
  stack1,
  stack2,
  stack3,
  ast,
  afters,
}) {
  js_dollar_i({
    stack1,
  });
  let consequent = property_get(stack1, "consequent");
  let body_block = property_get(consequent, "body");
  js_statement_return_empty_add(body_block);
  return;
}
