import { each } from "../../../love/public/src/each.mjs";
export function each_curried_right(lambda$item) {
  let r2 = function each_curried_right_result(list) {
    let r = each(list, lambda$item);
    return r;
  };
  return r2;
}
