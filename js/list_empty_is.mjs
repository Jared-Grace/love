import { equal } from "./equal.mjs";
import { list_size } from "./list_size.mjs";
export function list_empty_is(list) {
  let left = list_size(list);
  let e = equal(left, 0);
  return e;
}
