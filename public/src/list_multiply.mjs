import { list_concat } from "../../../love/public/src/list_concat.mjs";
import { object_multiply } from "../../../love/public/src/object_multiply.mjs";
export function list_multiply(value, times) {
  let list = object_multiply(value, times);
  let joined = list_concat(list);
  return joined;
}
