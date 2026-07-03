import { object_multiply } from "../../../love/public/src/object_multiply.mjs";
import { list_join_empty } from "../../../love/public/src/list_join_empty.mjs";
export function text_multiply(value, times) {
  let list = object_multiply(value, times);
  let multiplied = list_join_empty(list);
  return multiplied;
}
