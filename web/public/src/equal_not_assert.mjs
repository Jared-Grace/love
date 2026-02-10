import { assert } from "../../../love/public/src/assert.mjs";
import { equal_not } from "../../../love/public/src/equal_not.mjs";
export function equal_not_assert(f_name_before, f_name_after) {
  let ne = equal_not(f_name_before, f_name_after);
  assert(ne);
}
