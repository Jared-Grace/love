import { arguments_assert } from "./arguments_assert.mjs";
import { list_filter } from "./list_filter.mjs";
import { js_node_types_is } from "./js_node_types_is.mjs";
export function js_nodes_of_types(nodes, types) {
  arguments_assert(arguments, 2);
  ("Out of pieces of parsed code already gathered, the ones of any of the named kinds, in the order they were gathered in.");
  ("This is how one walk of a tree serves several readings that each want a different few kinds. Gathering is what costs; narrowing an already-gathered list costs almost nothing, because the list holds only the kinds somebody asked for and never the whole tree.");
  function lambda(node) {
    let types_is = js_node_types_is(node, types);
    return types_is;
  }
  let of_types = list_filter(nodes, lambda);
  return of_types;
}
