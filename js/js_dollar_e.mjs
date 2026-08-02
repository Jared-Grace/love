import { not_equal } from "./not_equal.mjs";
import { list_remove } from "./list_remove.mjs";
import { property_set } from "./property_set.mjs";
import { js_statement_block_new } from "./js_statement_block_new.mjs";
import { property_get } from "./property_get.mjs";
import { list_previous } from "./list_previous.mjs";
export function js_dollar_e({
  remaining,
  node,
  stack_,
  stack_2,
  stack_3,
  ast,
  afters,
}) {
  let previous = null;
  let alternate = list_previous(stack_2, stack_);
  while (not_equal(alternate, null)) {
    previous = alternate;
    alternate = property_get(alternate, "alternate");
  }
  let b = js_statement_block_new([]);
  property_set(previous, "alternate", b);
  list_remove(stack_2, stack_);
}
