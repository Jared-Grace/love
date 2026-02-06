import { list_max } from "../../../love/public/src/list_max.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
export function lists_size_max(lists) {
  let mapped = list_map(lists, list_size);
  let max = list_max(mapped);
  return max;
}
