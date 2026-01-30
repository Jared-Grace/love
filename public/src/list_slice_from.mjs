import { list_slice_from_indices } from "../../../love/public/src/list_slice_from_indices.mjs";
import { list_index_of } from "../../../love/public/src/list_index_of.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function list_slice_from(list, item_from, item_to) {
  marker("1");
  function lambda(item) {
    let index = list_index_of(list, item);
    return index;
  }
  let mapped = list_map([item_from, item_to], lambda);
  let v2 = list_slice_from_indices(mapped, list);
  return v2;
}
