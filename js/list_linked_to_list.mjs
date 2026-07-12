import { list_adder } from "./list_adder.mjs";
import { each_range } from "./each_range.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export function list_linked_to_list(node_first, property_name_next, max_depth) {
  function lambda12(la) {
    la(node_first);
    function lambda10(i) {
      node_first = property_get(node_first, property_name_next);
      if (null_is(node_first)) {
        return true;
      }
      la(node_first);
    }
    each_range(max_depth, lambda10);
  }
  let list = list_adder(lambda12);
  return list;
}
