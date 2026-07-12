import { null_not_is_assert } from "./null_not_is_assert.mjs";
import { integer_to_try } from "./integer_to_try.mjs";
export function integer_to(integer_text) {
  let i = integer_to_try(integer_text);
  null_not_is_assert(i);
  return i;
}
