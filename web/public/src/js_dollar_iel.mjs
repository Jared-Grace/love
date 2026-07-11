import { js_statement_block_new } from "../../../love/public/src/js_statement_block_new.mjs";
import { property_set } from "../../../love/public/src/property_set.mjs";
import { js_dollar_i } from "../../../love/public/src/js_dollar_i.mjs";
export function js_dollar_iel({
  remaining,
  node,
  stack_,
  stack_2,
  stack_3,
  ast,
  afters,
}) {
  js_dollar_i({
    stack_,
  });
  let b = js_statement_block_new(null);
  property_set(stack_, "alternate", b);
  return;
}
