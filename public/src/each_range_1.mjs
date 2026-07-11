import { range_ } from "../../../love/public/src/range_1.mjs";
import { each } from "../../../love/public/src/each.mjs";
export function each_range_(count, lambda$i) {
  let list = range_(count);
  each(list, lambda$i);
}
