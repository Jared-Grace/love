import { lists_sizes_equal } from "../../../love/public/src/lists_sizes_equal.mjs";
import { list_unique } from "../../../love/public/src/list_unique.mjs";
export function list_unique_is(mapped) {
  let unique = list_unique(mapped);
  let a = lists_sizes_equal([mapped, unique]);
  return a;
}
