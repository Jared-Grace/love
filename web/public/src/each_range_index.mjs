import { each_index } from "../../../love/public/src/each_index.mjs";
import { range } from "../../../love/public/src/range.mjs";
export function each_range_index(count, lambda) {
  let list = range(count);
  each_index(list, lambda);
}
