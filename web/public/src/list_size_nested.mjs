import { list_sum } from "../../../love/public/src/list_sum.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
export function list_size_nested(rows) {
  let mapped = list_map(rows, list_size);
  let total = list_sum(mapped);
  return total;
}
