import { list_skip_end_count } from "../../../love/public/src/list_skip_end_count.mjs";
import { range_ } from "../../../love/public/src/range_1.mjs";
export function list_skip_end_count_sandbox() {
  let r = range_(5);
  let result = list_skip_end_count(r, 2);
  return result;
}
