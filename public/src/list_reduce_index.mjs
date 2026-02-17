import { each_index } from "./each_index.mjs";
export function list_reduce_index(list, lambda$item$value$index, inital) {
  let value = inital;
  function lambda2(item, index) {
    value = lambda$item$value$index(value, item, index);
  }
  each_index(list, lambda2);
  return value;
}
