import { list_size } from "../../../love/public/src/list_size.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
export function list_map_size(lists) {
  let mapped2 = list_map(lists, list_size);
  return mapped2;
}
