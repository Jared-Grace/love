import { each_index } from "./each_index.mjs";
export function list_reduce_index(list, lambda$value$item$index, inital) {
  let value = inital;
  function lambda(item, index) {
    value = lambda$value$item$index(value, item, index);
  }
  each_index(list, lambda);
  return value;
}
