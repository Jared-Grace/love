import { range } from "../../../love/public/src/range.mjs";
import { each } from "../../../love/public/src/each.mjs";
export function each_range(count, lambda) {
  let list = range(count);
  each(list, lambda);
}
