import { equal } from "./equal.mjs";
import { list_size } from "./list_size.mjs";
export function list_size_1(list) {
  let left = list_size(list);
  let s = equal(left, 1);
  return s;
}
