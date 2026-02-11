import { list_copy_reverse } from "../../../love/public/src/list_copy_reverse.mjs";
import { each_pair } from "../../../love/public/src/each_pair.mjs";
export function each_pair_reverse(list_a, list_b, lambda$a$b) {
  list_copy_reverse(list_a);
  let r = each_pair(list_a, list_b, lambda$a$b);
  return r;
}
