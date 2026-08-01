import { equal } from "./equal.mjs";
import { list_first } from "./list_first.mjs";
export function list_first_is(list, item) {
  let f = list_first(list);
  let fi = equal(f, item);
  return fi;
}
