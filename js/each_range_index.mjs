import { each_index } from "./each_index.mjs";
import { range } from "./range.mjs";
export function each_range_index(count, lambda) {
  let list = range(count);
  each_index(list, lambda);
}
