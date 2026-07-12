import { js_statement_block_new } from "./js_statement_block_new.mjs";
import { property_set } from "./property_set.mjs";
import { js_dollar_i } from "./js_dollar_i.mjs";
export function js_dollar_iel({
  remaining,
  node,
  stack_1,
  stack_2,
  stack_3,
  ast,
  afters,
}) {
  js_dollar_i({
    stack_1,
  });
  let b = js_statement_block_new(null);
  property_set(stack_1, "alternate", b);
  return;
}
