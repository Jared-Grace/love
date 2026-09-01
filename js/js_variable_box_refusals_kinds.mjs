import { arguments_assert } from "./arguments_assert.mjs";
import { js_variable_box_refusals_update_each } from "./js_variable_box_refusals_update_each.mjs";
import { property_get } from "./property_get.mjs";
import { each } from "./each.mjs";
export function js_variable_box_refusals_kinds(ast, named_is, refusals) {
  arguments_assert(arguments, 3);
  let r = js_variable_box_refusals_update_each(ast, named_is, refusals);
  let update_each = property_get(r, "update_each");
  let updates = property_get(r, "updates");
  each(updates, update_each);
  let kinds = [
    "FunctionDeclaration",
    "FunctionExpression",
    "ArrowFunctionExpression",
  ];
  return kinds;
}
