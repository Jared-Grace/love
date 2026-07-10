import { list_map } from "../../../love/public/src/list_map.mjs";
import { range } from "../../../love/public/src/range.mjs";
export function range_map(count, lambda$item) {
  let n_indices = range(count);
  let mapped = list_map(n_indices, lambda$item);
  return mapped;
}
