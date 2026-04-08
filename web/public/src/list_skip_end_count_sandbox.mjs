import { list_take_end_count } from "../../../love/public/src/list_take_end_count.mjs";
import { range_1 } from "../../../love/public/src/range_1.mjs";
export function list_skip_end_count_sandbox() {
  let r = range_1(5);
  let result = list_take_end_count(r, 2);
  return result;
}
