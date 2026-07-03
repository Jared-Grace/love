import { list_get } from "../../../love/public/src/list_get.mjs";
import { list_get_wrap_index } from "../../../love/public/src/list_get_wrap_index.mjs";
export function list_cycler(list) {
  let i = 0;
  let next = function list_cycler_next() {
    i = list_get_wrap_index(list, i);
    let item = list_get(list, i);
    i++;
    return item;
  };
  return next;
}
