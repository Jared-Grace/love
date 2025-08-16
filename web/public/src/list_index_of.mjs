import { error } from "./error.mjs";
export function list_index_of(list, item) {
  let index = list.indexOf(item);
  if (index <= -1) {
    error();
  }
  return index;
}
