import { list_map_index } from "./list_map_index.mjs";
import { list_get_nearby } from "./list_get_nearby.mjs";
import { positive_is_assert_json } from "./positive_is_assert_json.mjs";
export function list_nearby(list, nearness) {
  positive_is_assert_json(nearness, {
    hint: "nearness should be a positive number of neighbors to include",
  });
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
