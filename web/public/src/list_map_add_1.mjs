import { add_1 } from "../../../love/public/src/add_1.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
export function list_map_add_1(indices) {
  let mapped = list_map(indices, add_1);
  return mapped;
}
