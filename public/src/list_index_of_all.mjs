import { list_add } from "../../../love/public/src/list_add.mjs";
import { list_reduce_index } from "../../../love/public/src/list_reduce_index.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function list_index_of_all(list, search) {
  marker("1");
  function lambda(item, value, index) {
    if (value === search) {
      list_add(item, index);
    }
  }
  let indices = list_reduce_index(list, lambda, []);
  return indices;
}
