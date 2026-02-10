import { each } from "../../../love/public/src/each.mjs";
export function each_nested(list, lambda4) {
  function lambda2(lr) {
    each(lr, lambda4);
  }
  each(list, lambda2);
}
