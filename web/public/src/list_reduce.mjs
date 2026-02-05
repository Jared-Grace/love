import { list_reduce_index } from "../../../love/public/src/list_reduce_index.mjs";
export function list_reduce(list, lambda$item$value, inital) {
  function lambda(item, value, index) {
    let v = lambda$item$value(item, value);
    return v;
  }
  let value = list_reduce_index(list, lambda, inital);
  return value;
}
