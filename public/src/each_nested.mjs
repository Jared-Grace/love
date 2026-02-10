import { each_curried_right } from "../../../love/public/src/each_curried_right.mjs";
import { each } from "../../../love/public/src/each.mjs";
export function each_nested(list, lambda$item) {
  let r2 = each_curried_right(lambda$item);
  each(list, r2);
}
