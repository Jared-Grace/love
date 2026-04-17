import { integer_is_assert } from "../../../love/public/src/integer_is_assert.mjs";
export function list_get_try(list, index) {
  integer_is_assert(index);
  let item = list[index];
  return item;
}
