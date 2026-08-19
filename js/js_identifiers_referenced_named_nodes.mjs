import { arguments_assert } from "./arguments_assert.mjs";
import { js_identifiers_referenced_nodes } from "./js_identifiers_referenced_nodes.mjs";
import { list_filter } from "./list_filter.mjs";
import { property_equals } from "./property_equals.mjs";
export function js_identifiers_referenced_named_nodes(ast, name) {
  arguments_assert(arguments, 2);
  ("Every mention of one particular name in this file that reads a value, and none of the places the same word is merely the name of a property or a key.");
  ("The whole list narrowed to one word. Every caller that wanted the mentions of a single name was filtering the whole list itself, and a filter written out at the call site is a place for the reading of what counts as a mention to drift from the one next door.");
  let referenced = js_identifiers_referenced_nodes(ast);
  function named_is(node) {
    let is = property_equals(node, "name", name);
    return is;
  }
  let named = list_filter(referenced, named_is);
  return named;
}
