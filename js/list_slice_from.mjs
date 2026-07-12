import { list_slice_from_indices } from "./list_slice_from_indices.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { list_map } from "./list_map.mjs";
export function list_slice_from(list, item_from, item_to) {
  function lambda(item) {
    let index = list_index_of(list, item);
    return index;
  }
  let mapped = list_map([item_from, item_to], lambda);
  let v = list_slice_from_indices(list, mapped);
  return v;
}
