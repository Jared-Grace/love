import { null_not_is_assert } from "../../../love/public/src/null_not_is_assert.mjs";
import { integer_to_try } from "../../../love/public/src/integer_to_try.mjs";
export function integer_to(index_string) {
  let index = integer_to_try(index_string);
  null_not_is_assert(index);
  return index;
}
