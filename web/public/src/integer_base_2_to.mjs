import { integer_base_2_to_try } from "../../../love/public/src/integer_base_2_to_try.mjs";
import { null_not_is_assert } from "../../../love/public/src/null_not_is_assert.mjs";
export function integer_base_2_to(integer_text) {
  let i = integer_base_2_to_try(integer_text);
  null_not_is_assert(i);
  return i;
}
