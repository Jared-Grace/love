import { add_ } from "../../../love/public/src/add_1.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
export function list_map_add_(list) {
  let mapped = list_map(list, add_);
  return mapped;
}
