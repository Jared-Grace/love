import { list_first_second } from "../../../love/public/src/list_first_second.mjs";
import { list_sort_number } from "../../../love/public/src/list_sort_number.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_index_of } from "../../../love/public/src/list_index_of.mjs";
import { list_slice_include } from "../../../love/public/src/list_slice_include.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function list_slice_from(list, item_from, item_to) {
  marker("1");
  let mapped = list_map([item_from, item_to], list_index_of);
  list_sort_number(mapped);
  let result = list_first_second(list2);
  let sliced = list_slice_include(list, a, b);
}
