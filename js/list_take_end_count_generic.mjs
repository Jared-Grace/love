import { take_end_count_generic } from "./take_end_count_generic.mjs";
import { list_size } from "./list_size.mjs";
export function list_take_end_count_generic(list, count) {
  let size_get = list_size;
  let c = take_end_count_generic(list, count, size_get);
  return c;
}
