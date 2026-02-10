import { each_curried_right } from "../../../love/public/src/each_curried_right.mjs";
import { each } from "../../../love/public/src/each.mjs";
export function each_nested(list, lambda$item) {
  function lambda(item2) {}
  let r2 = each_curried_right(lambda);
  each(list, r2);
}
