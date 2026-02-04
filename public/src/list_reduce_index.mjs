import { marker } from "../../../love/public/src/marker.mjs";
import { each_index } from "./each_index.mjs";
export function list_reduce_index(list, reducer, inital) {
  marker("1");
  let value = inital;
  function lambda2(item, index) {
    value = reducer(item, value, index);
  }
  each_index(list, lambda2);
  return value;
}
