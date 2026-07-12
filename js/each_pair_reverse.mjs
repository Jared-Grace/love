import { list_copy_reverse } from "./list_copy_reverse.mjs";
import { each_pair } from "./each_pair.mjs";
export function each_pair_reverse(list_a, list_b, lambda$a$b) {
  let ra = list_copy_reverse(list_a);
  let rb = list_copy_reverse(list_b);
  let r = each_pair(ra, rb, lambda$a$b);
  return r;
}
