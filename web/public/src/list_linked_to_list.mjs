import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { each_range } from "../../../love/public/src/each_range.mjs";
import { null_is } from "../../../love/public/src/null_is.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function list_linked_to_list(dfs, property_name, max_depth) {
  function lambda12(la) {
    la(dfs);
    function lambda10(i) {
      dfs = property_get(dfs, property_name);
      if (null_is(dfs)) {
        return true;
      }
      la(dfs);
    }
    each_range(max_depth, lambda10);
  }
  let list3 = list_adder(lambda12);
  return list3;
}
