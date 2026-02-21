import { each_multiple_or_null } from "../../../love/public/src/each_multiple_or_null.mjs";
import { each_pair_generic } from "../../../love/public/src/each_pair_generic.mjs";
export function each_pair_or_null(list_a, list_b, lambda$a$b) {
  let each_fn = each_multiple_or_null;
  each_pair_generic(list_a, list_b, each_fn, lambda$a$b);
}
