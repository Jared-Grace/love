import { js_statement_block_new } from "../../../love/public/src/js_statement_block_new.mjs";
import { property_set } from "../../../love/public/src/property_set.mjs";
import { js_dollar_i } from "../../../love/public/src/js_dollar_i.mjs";
export function js_dollar_iel({
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
  let b = js_statement_block_new(null);
  property_set(stack1, "alternate", b);
  return;
}
