import { list_indices_to_items } from "../../../love/public/src/list_indices_to_items.mjs";
import { list_map_subtract_ } from "../../../love/public/src/list_map_subtract_1.mjs";
export function list_indices_to_items_(positions, arg_names) {
  let mapped = list_map_subtract_(positions);
  let items = list_indices_to_items(arg_names, mapped);
  return items;
}
