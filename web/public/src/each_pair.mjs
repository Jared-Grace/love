import { each_pair_generic } from "../../../love/public/src/each_pair_generic.mjs";
import { each_multiple } from "../../../love/public/src/each_multiple.mjs";
export function each_pair(list_a, list_b, lambda$a$b) {
  let each_fn = each_multiple;
  each_pair_generic(list_a, list_b, each_fn, lambda$a$b);
}
