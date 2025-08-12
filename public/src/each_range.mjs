import { range } from "./range.mjs";
import { each } from "./each.mjs";
export function each_range(count, lambda) {
  return each(range(count), lambda);
}
