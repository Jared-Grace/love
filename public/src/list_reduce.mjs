import { list_reduce_index } from "../../../love/public/src/list_reduce_index.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { each } from "../../../love/public/src/each.mjs";
export function list_reduce(list, reducer, inital) {
  marker("1");
  let value = inital;
  function lambda2(item) {
    value = reducer(item, value);
  }
  each(list, lambda2);
  return value;
  function lambda(item, index) {
    value = reducer(item, value);
  }
  let value2 = list_reduce_index(list, lambda, inital);
}
