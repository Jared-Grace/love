import { equal } from "./equal.mjs";
import { list_last } from "./list_last.mjs";
export function list_last_is(list, item) {
  let last = list_last(list);
  let li = equal(last, item);
  return li;
}
