import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { list_reduce_index } from "./list_reduce_index.mjs";
export function list_index_of_all(list, search) {
  function lambda(value, item, index) {
    if (equal(item, search)) {
      list_add(value, index);
    }
    return value;
  }
  let indices = list_reduce_index(list, lambda, []);
  return indices;
}
