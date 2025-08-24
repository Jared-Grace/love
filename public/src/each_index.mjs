import { each } from "./each.mjs";
export function each_index(list, lambda$item$index) {
  let index = 0;
  function lambda2(item) {
    lambda$item$index(item, index);
    index++;
  }
  let v = each(list, lambda2);
  return v;
}
