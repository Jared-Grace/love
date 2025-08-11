import { error } from "./error.mjs";
export function list_index_of(arr, item) {
  let index = arr.indexOf(item);
  if (index <= -1) {
    error();
  }
  return index;
}
