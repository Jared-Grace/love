import { range } from "./range.mjs";
import { each } from "./each.mjs";
export function each_range_from(count, lambda) {
  let list = range(count);
  each(list, lambda);
}
