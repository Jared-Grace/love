import { list_map_index } from "../../../love/public/src/list_map_index.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { range } from "../../../love/public/src/range.mjs";
import { list_get } from "../../../love/public/src/list_get.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { list_index_is } from "../../../love/public/src/list_index_is.mjs";
import { range_from } from "../../../love/public/src/range_from.mjs";
export function list_nearby(groups, nearness) {
  function lambda(item, index) {
    let r = range_from(index - nearness, index + nearness);
    function lambda6(index3) {
      let ii = list_index_is(groups, index3);
      return ii;
    }
    let filtered = list_filter(r, lambda6);
    function lambda2(index2) {
      let item2 = list_get(groups, index2);
      return item2;
    }
    let range = list_map(filtered, lambda2);
    let v3 = {
      range,
      item,
    };
    return v3;
  }
  let mapped = list_map_index(groups, lambda);
  return mapped;
}
