import { each } from "../../../love/public/src/each.mjs";
export function each_nested(list, lambda$item) {
  function lambda2(item) {
    each(item, lambda$item);
  }
  each(list, lambda2);
}
