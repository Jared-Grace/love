import { arguments_assert } from "./arguments_assert.mjs";
import { list_remove } from "./list_remove.mjs";
import { property_get } from "./property_get.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
export function js_function_forwarding_removed_expression(
  holder,
  node,
  site,
  target,
) {
  arguments_assert(arguments, 4);
  list_remove(holder, node);
  let argument = property_get(site, "argument");
  let expression = js_parse_expression(target);
  let r = {
    argument,
    expression,
  };
  return r;
}
