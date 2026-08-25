import { arguments_assert } from "./arguments_assert.mjs";
import { list_single } from "./list_single.mjs";
import { js_node_value_get } from "./js_node_value_get.mjs";
export function js_selects_literal(ast, selects) {
  "The written-out value a selection stands for, whether the selection stopped at the value itself, at the line that binds it, or at the named part of a record that holds it.";
  "EVERY VERB THAT WRITES A VALUE HAS TO GET HERE FIRST and none of them cares how, so the getting there is one function rather than a copy inside each of them - the same reason the list a register keeps its entries in is fetched in one place.";
  arguments_assert(arguments, 2);
  let node = list_single(selects);
  let literal = js_node_value_get(node);
  return literal;
}
