import { list_size_equal } from "./list_size_equal.mjs";
export function list_empty_is(list) {
  let e = list_size_equal(list, 0);
  return e;
}
