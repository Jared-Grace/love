import { list_map_size } from "../../../love/public/src/list_map_size.mjs";
import { list_max } from "../../../love/public/src/list_max.mjs";
export function lists_size_max(lists) {
  let mapped = list_map_size(lists);
  let max = list_max(mapped);
  return max;
}
