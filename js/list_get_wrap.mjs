import { list_get_wrap_index } from "./list_get_wrap_index.mjs";
import { list_get } from "./list_get.mjs";
export function list_get_wrap(cycles, index) {
  let r = list_get_wrap_index(cycles, index);
  let item = list_get(cycles, r);
  return item;
}
