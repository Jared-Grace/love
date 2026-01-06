import { list_first } from "../../../love/public/src/list_first.mjs";
import { list_first_last } from "../../../love/public/src/list_first_last.mjs";
import { list_sort_number } from "../../../love/public/src/list_sort_number.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_slice_include } from "../../../love/public/src/list_slice_include.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { list_last } from "./list_last.mjs";
export function list_slice_from(list, item_from, item_to) {
  marker("1");
  function lambda() {list_index_of}
  let mapped = list_map([item_from, item_to], lambda);
  list_sort_number(mapped);
  let v = list_first_last(list);
  let last = list_first(v);
  let first = list_last(v);
  let sliced = list_slice_include(list, first, last);
  return sliced;
}
