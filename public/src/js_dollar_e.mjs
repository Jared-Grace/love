import { list_remove } from "../../../love/public/src/list_remove.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { js_statement_block_new } from "../../../love/public/src/js_statement_block_new.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { list_previous } from "../../../love/public/src/list_previous.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function js_dollar_e({
  remaining,
  node,
  stack1,
  stack2,
  stack3,
  ast,
  afters,
}) {
  marker("1");
  let previous = null;
  let alternate = list_previous(stack2, stack1);
  while (alternate !== null) {
    previous = alternate;
    alternate = object_property_get(alternate, "alternate");
  }
  let b = js_statement_block_new([]);
  object_property_set(previous, "alternate", b);
  list_remove(list, item);
  return;
}
