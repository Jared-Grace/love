import { arguments_assert } from "./arguments_assert.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map_concat_multiple } from "./list_map_concat_multiple.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_visit_types } from "./js_visit_types.mjs";
import { list_adder } from "./list_adder.mjs";
import { property_get } from "./property_get.mjs";
export function js_list_types_nodes(ast, types) {
  arguments_assert(arguments, 2);
  ("Every piece of parsed code of any of the named kinds, listed kind by kind in the order the kinds were asked for.");
  ("The same answer as asking for one kind at a time and joining the answers end to end - the grouping is kept exactly, so this may stand in for that anywhere without a caller noticing - but the tree is walked once instead of once per kind. Two readings the free-name question is built on asked for three kinds each, so eight walks of the same tree were being paid for every file, and that question is asked of every file this repo holds.");
  function lambda2(la) {
    function lambda(v) {
      let node = property_get(v, "node");
      la(node);
    }
    js_visit_types(ast, types, lambda);
  }
  let found = list_adder(lambda2);
  function nodes_of(type) {
    function lambda3(node) {
      let type_is = js_node_type_is(node, type);
      return type_is;
    }
    let of_type = list_filter(found, lambda3);
    return of_type;
  }
  let grouped = list_map_concat_multiple(types, nodes_of);
  return grouped;
}
