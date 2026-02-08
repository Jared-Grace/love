import { list_map_index } from "../../../love/public/src/list_map_index.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_get } from "../../../love/public/src/list_get.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { list_index_is } from "../../../love/public/src/list_index_is.mjs";
import { range_from } from "../../../love/public/src/range_from.mjs";
export function list_nearby(list, nearness) {
  function lambda(item, index) {
    let r = range_from(index - nearness, index + nearness);
    function lambda6(index3) {
      let ii = list_index_is(list, index3);
      return ii;
    }
    let filtered = list_filter(r, lambda6);
    function lambda2(index2) {
      let item2 = list_get(list, index2);
      return item2;
    }
    let nearby = list_map(filtered, lambda2);
    let m = {
      nearby,
      item,
    };
    return m;
  }
  let mapped = list_map_index(list, lambda);
  return mapped;
}
