import { marker } from "../../../love/public/src/marker.mjs";
import { each_index } from "./each_index.mjs";
export function list_reduce_index(list, lambda$item$value$index, inital) {
  let value = inital;
  function lambda2(item, index) {
    value = lambda$item$value$index(item, value, index);
  }
  each_index(list, lambda2);
  return value;
}
