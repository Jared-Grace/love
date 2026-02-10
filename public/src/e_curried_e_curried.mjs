import { each } from "../../../love/public/src/each.mjs";
export function e_curried_e_curried(lambda$item) {
  return function e_curried_e_curried_result(list) {
    return each(list, lambda$item);
  };
}
