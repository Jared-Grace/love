import { each } from "../../../love/public/src/each.mjs";
export function each_nested(list, lambda) {
  function lambda2(item) {
    each(item, lambda);
  }
  each(list, lambda2);
}
