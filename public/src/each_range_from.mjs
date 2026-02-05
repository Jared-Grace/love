import { range_from } from "../../../love/public/src/range_from.mjs";
import { each } from "../../../love/public/src/each.mjs";
export function each_range_from(from, to, lambda$item) {
  let list = range_from(from, to);
  each(list, lambda$item);
}
