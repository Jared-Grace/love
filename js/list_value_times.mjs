import { lambda_get } from "./lambda_get.mjs";
import { range } from "./range.mjs";
import { list_map } from "./list_map.mjs";
export function list_value_times(value, count) {
  "A list holding the one value this many times.";
  let same = lambda_get(value);
  let list = range(count);
  let values = list_map(list, same);
  return values;
}
