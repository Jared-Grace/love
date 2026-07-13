import { assert } from "./assert.mjs";
import { list_unique_is } from "./list_unique_is.mjs";
export function list_unique_is_assert(list) {
  let u = list_unique_is(list);
  assert(u);
}
