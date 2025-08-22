import { each } from "./each.mjs";
export function each_index(list, lambda) {
  let index = 0;
  function lambda2(item) {
    lambda(item, index);
    index++;
  }
  let v = each(list, lambda2);
  return v;
}
