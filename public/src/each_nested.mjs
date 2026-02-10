import { each } from "../../../love/public/src/each.mjs";
export function each_nested(list, lambda$item) {
  function each_nested_lambda(item) {
    each(item, lambda$item);
  }
  each(list, each_nested_lambda);
}
