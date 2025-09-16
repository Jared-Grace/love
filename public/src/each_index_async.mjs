import { each } from "./each.mjs";
export function each_index_async(list, lambda$item$index) {
  let index = 0;
  function lambda2(item) {
    lambda$item$index(item, index);
    index++;
  }
  each(list, lambda2);
}
