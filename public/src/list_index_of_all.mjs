import { list_reduce_index } from "../../../love/public/src/list_reduce_index.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function list_index_of_all(list, reducer, inital) {
  marker("1");
  function lambda() {}
  let value = list_reduce_index(list, lambda, []);
  return value;
}
