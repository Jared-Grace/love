import { range_map } from "./range_map.mjs";
import { lambda_get } from "./lambda_get.mjs";
export function list_value_repeat(value, count) {
  "A list holding the one value this many times.";
  let same = lambda_get(value);
  let values = range_map(count, same);
  return values;
}
