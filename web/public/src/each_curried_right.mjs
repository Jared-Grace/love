import { each } from "../../../love/public/src/each.mjs";
export function each_curried_right(lambda$item) {
  return function each_curried_right_result(list) {
    return each(list, lambda$item);
  };
}
