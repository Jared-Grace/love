import { each } from "../../../love/public/src/each.mjs";
export function each_index(list, lambda$item$index) {
  let index = 0;
  function lambda_each_index(item) {
    lambda$item$index(item, index);
    index++;
  }
  each(list, lambda_each_index);
}
