import { arguments_assert } from "./arguments_assert.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { not } from "./not.mjs";
import { property_equals } from "./property_equals.mjs";
import { property_get } from "./property_get.mjs";
export function js_rewrite_targets_literal_or_null(node) {
  arguments_assert(arguments, 1);
  let there = null_not_is(node);
  if (not(there)) {
    return null;
  }
  let literal_is = property_equals(node, "type", "Literal");
  if (not(literal_is)) {
    return null;
  }
  let value = property_get(node, "value");
  return value;
}
