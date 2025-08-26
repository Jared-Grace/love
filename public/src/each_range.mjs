import { range } from "./range.mjs";
import { each } from "./each.mjs";
export function each_range(count, lambda) {
  let list = range(count);
  each(list, lambda);
}
