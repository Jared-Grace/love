import { list_map_add_1 } from "../../../love/public/src/list_map_add_1.mjs";
import { list_map_index_of } from "../../../love/public/src/list_map_index_of.mjs";
export function list_map_index_of_1(list, args) {
  let indices = list_map_index_of(list, args);
  let mapped2 = list_map_add_1(indices);
  return mapped2;
}
