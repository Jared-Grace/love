import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_index_of } from "../../../love/public/src/list_index_of.mjs";
import { list_slice_include } from "../../../love/public/src/list_slice_include.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function list_slice_from(list, item_from, item_to) {
  marker("1");
  function lambda(item) {}
  let mapped = list_map(list2, lambda);
  let a = list_index_of(list, item_from);
  let b = list_index_of(list, item_to);
  let sliced = list_slice_include(list, a, b);
}
