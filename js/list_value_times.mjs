import { list_map } from "./list_map.mjs";
import { range } from "./range.mjs";
export function list_value_times(value, count) {
  "A list holding the one value this many times.";
  function same(ignored) {
    return value;
  }
  let list = range(count);
  let values = list_map(list, same);
  return values;
}
