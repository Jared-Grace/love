import { take_end_count_generic } from "../../../love/public/src/take_end_count_generic.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
import { list_take } from "../../../love/public/src/list_take.mjs";
export function text_take_end_count(list, count) {
  let size_get = list_size;
  let c = take_end_count_generic(list, count, size_get);
  let result = list_take(list, c);
  return result;
}
