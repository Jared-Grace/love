import { range } from "./range.mjs";
import { each } from "./each.mjs";
export function each_range(count, lambda) {
  let list = range(count);
  let v = each(list, lambda);
  return v;
}
