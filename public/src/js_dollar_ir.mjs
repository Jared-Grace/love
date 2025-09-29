import { js_statement_return_empty_add } from "../../../love/public/src/js_statement_return_empty_add.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { js_dollar_i } from "../../../love/public/src/js_dollar_i.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function js_dollar_ir({
  remaining,
  node,
  stack1,
  stack2,
  stack3,
  ast,
  afters,
}) {
  marker("1");
  js_dollar_i({
    stack1,
  });
  let consequent = object_property_get(stack1, "consequent");
  let body_block = object_property_get(consequent, "body");
  js_statement_return_empty_add(body_block);
  return;
}
