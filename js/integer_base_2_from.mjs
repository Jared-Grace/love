import { integer_base_2_from_try } from "./integer_base_2_from_try.mjs";
import { null_not_is_assert } from "./null_not_is_assert.mjs";
export function integer_base_2_from(integer_text) {
  let i = integer_base_2_from_try(integer_text);
  null_not_is_assert(i);
  return i;
}
