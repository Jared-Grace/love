import { list_min } from "../../../love/public/src/list_min.mjs";
import { list_map_size } from "../../../love/public/src/list_map_size.mjs";
export function lists_size_min(lists) {
  let mapped = list_map_size(lists);
  let max = list_min(mapped);
  return max;
}
