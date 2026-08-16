import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { ternary } from "./ternary.mjs";
export function js_node_written_out_entries(node) {
  arguments_assert(arguments, 1);
  ("The entries of something written out in full - the things in a list, or the named parts of a thing.");
  ("The two are spelled differently in the tree and read identically by a person, so asking for the entries of either one here is what lets a rule about how big a single entry may get be written once instead of twice.");
  let type = property_get(node, "type");
  let object_expression_is = equal(type, "ObjectExpression");
  let word = ternary(object_expression_is, "properties", "elements");
  let entries = property_get(node, word);
  return entries;
}
