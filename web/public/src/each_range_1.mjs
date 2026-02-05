import { range_1 } from "../../../love/public/src/range_1.mjs";
import { each } from "../../../love/public/src/each.mjs";
export function each_range_1(count, lambda$i) {
  let list = range_1(count);
  each(list, lambda$i);
}
