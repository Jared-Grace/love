import { list_map_index } from "./list_map_index.mjs";
import { list_get_nearby } from "./list_get_nearby.mjs";
import { positive_is_assert } from "./positive_is_assert.mjs";
export function list_nearby(list, nearness) {
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
