import { range } from "../../../love/public/src/range.mjs";
import { each } from "../../../love/public/src/each.mjs";
export function each_range_1(count, lambda$i) {
  let list = range(count);
  each(list, lambda$i);
}
