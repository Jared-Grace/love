import { each } from "../../../love/public/src/each.mjs";
export function each_nested(list, lambda) {
  function lambda2(lr) {
    each(lr, lambda);
  }
  each(list, lambda2);
}
