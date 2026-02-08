import { list_indices_to_items } from "../../../love/public/src/list_indices_to_items.mjs";
import { list_filter_index_is } from "../../../love/public/src/list_filter_index_is.mjs";
export function list_indices_to_items_try(list, indices) {
  let filtered = list_filter_index_is(list, indices);
  let nearby = list_indices_to_items(list, filtered);
  return nearby;
}
