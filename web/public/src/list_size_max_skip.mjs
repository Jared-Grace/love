import { list_remove_start } from "../../../love/public/src/list_remove_start.mjs";
import { greater_than } from "../../../love/public/src/greater_than.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
export function list_size_max_skip(list, max) {
  let size = list_size(list);
  if (greater_than(size, max)) {
    const s = size - max;
    list_remove_start(list, s);
  }
  return list;
}
