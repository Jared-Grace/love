import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { list_first_last } from "../../../love/public/src/list_first_last.mjs";
import { list_sort_number } from "../../../love/public/src/list_sort_number.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_index_of } from "../../../love/public/src/list_index_of.mjs";
import { list_slice_include } from "../../../love/public/src/list_slice_include.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function list_slice_from(list, item_from, item_to) {
  marker("1");
  let mapped = list_map([item_from, item_to], list_index_of);
  list_sort_number(mapped);
  let v = list_first_last(list);
  let last = object_property_get(v, "last");
  let first = object_property_get(v, "first");
  let sliced = list_slice_include(list, first, last);
  return sliced;
}
