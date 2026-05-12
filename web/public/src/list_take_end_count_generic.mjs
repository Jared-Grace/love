import { take_end_count_generic } from "../../../love/public/src/take_end_count_generic.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
export function list_take_end_count_generic(list, count) {
  let size_get = list_size;
  let c = take_end_count_generic(count, size_get, list);
  return c;
}
