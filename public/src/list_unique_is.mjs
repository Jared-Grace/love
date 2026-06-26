import { lists_sizes_equal } from "../../../love/public/src/lists_sizes_equal.mjs";
import { list_unique } from "../../../love/public/src/list_unique.mjs";
export function list_unique_is(list) {
  let unique = list_unique(list);
  let a = lists_sizes_equal([list, unique]);
  return a;
}
