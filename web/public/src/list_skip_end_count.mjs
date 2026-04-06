import { list_skip } from "../../../love/public/src/list_skip.mjs";
import { list_take_end_count_generic } from "../../../love/public/src/list_take_end_count_generic.mjs";
export function list_skip_end_count(list, count) {
  let c = list_take_end_count_generic(list, count);
  let result = list_skip(list, c);
  return result;
}
