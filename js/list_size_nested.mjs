import { list_sum } from "./list_sum.mjs";
import { list_size } from "./list_size.mjs";
import { list_map } from "./list_map.mjs";
export function list_size_nested(rows) {
  let mapped = list_map(rows, list_size);
  let total = list_sum(mapped);
  return total;
}
