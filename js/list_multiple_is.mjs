import { greater_than_equal } from "./greater_than_equal.mjs";
import { list_size } from "./list_size.mjs";
export function list_multiple_is(list) {
  let a = list_size(list);
  let m = greater_than_equal(a, 2);
  return m;
}
