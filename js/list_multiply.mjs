import { object_multiply } from "./object_multiply.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
export function list_multiply(value, times) {
  let list = object_multiply(value, times);
  let multiplied = list_concat_multiple(list);
  return multiplied;
}
