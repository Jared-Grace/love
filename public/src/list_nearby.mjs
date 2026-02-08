import { list_filter_index_is } from "../../../love/public/src/list_filter_index_is.mjs";
import { positive_is_assert } from "../../../love/public/src/positive_is_assert.mjs";
import { list_indices_to_items } from "../../../love/public/src/list_indices_to_items.mjs";
import { list_map_index } from "../../../love/public/src/list_map_index.mjs";
import { range_from } from "../../../love/public/src/range_from.mjs";
export function list_nearby(list, nearness) {
  positive_is_assert(nearness);
  function mapper(item, index) {
    let indices = range_from(index - nearness, index + nearness);
    let filtered = list_filter_index_is(list, indices);
    let nearby = list_indices_to_items(list, filtered);
    let m = {
      nearby,
      item,
    };
    return m;
  }
  let nearbys = list_map_index(list, mapper);
  return nearbys;
}
