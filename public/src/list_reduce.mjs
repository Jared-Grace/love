import { list_reduce_index } from "../../../love/public/src/list_reduce_index.mjs";
export function list_reduce(list, lambda$value$item, inital) {
  function lambda(value, item, index) {
    let v = lambda$value$item(value, item);
    return v;
  }
  let value = list_reduce_index(list, lambda, inital);
  return value;
}
