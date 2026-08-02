import { list_map_sum } from "./list_map_sum.mjs";
import { list_size } from "./list_size.mjs";
export function list_size_nested(rows) {
  let total = list_map_sum(rows, list_size);
  return total;
}
