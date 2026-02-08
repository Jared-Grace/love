import { list_get_nearby } from "../../../love/public/src/list_get_nearby.mjs";
import { positive_is_assert } from "../../../love/public/src/positive_is_assert.mjs";
import { list_map_index } from "../../../love/public/src/list_map_index.mjs";
export function list_nearbys(list, nearness) {
  positive_is_assert(nearness);
  function mapper(item, index) {
    let nearby = list_get_nearby(list, index, nearness);
    let m = {
      nearby,
      item,
    };
    return m;
  }
  let nearbys = list_map_index(list, mapper);
  return nearbys;
}
