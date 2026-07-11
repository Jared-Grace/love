import { list_remove } from "../../../love/public/src/list_remove.mjs";
import { property_set } from "../../../love/public/src/property_set.mjs";
import { js_statement_block_new } from "../../../love/public/src/js_statement_block_new.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_previous } from "../../../love/public/src/list_previous.mjs";
export function js_dollar_e({
  remaining,
  node,
  stack_1,
  stack_2,
  stack_3,
  ast,
  afters,
}) {
  let previous = null;
  let alternate = list_previous(stack_2, stack_1);
  while (alternate !== null) {
    previous = alternate;
    alternate = property_get(alternate, "alternate");
  }
  let b = js_statement_block_new([]);
  property_set(previous, "alternate", b);
  list_remove(stack_2, stack_1);
}
