import { each_curried_right } from "../../../love/public/src/each_curried_right.mjs";
import { each } from "../../../love/public/src/each.mjs";
export function each_nested(list, lambda$item) {
  function each_nested_lambda(item) {
    each(item, lambda$item);
  }
  let r2 = each_curried_right(function lambda(item2) {});
  each(list, each_nested_lambda);
}
