import { marker } from "../../../love/public/src/marker.mjs";
import { each_pair_generic } from "../../../love/public/src/each_pair_generic.mjs";
import { each_multiple } from "../../../love/public/src/each_multiple.mjs";
export function each_pair_or_null(list_a, list_b, lambda$a$b) {
  marker("1");
  let each_fn = each_multiple;
  each_pair_generic(list_a, list_b, each_fn, lambda$a$b);
}
