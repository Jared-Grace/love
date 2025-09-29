import { assert } from "../../../love/public/src/assert.mjs";
import { string_empty_not_is } from "../../../love/public/src/string_empty_not_is.mjs";
export function string_empty_not_is_assert(task_name) {
  let ne = string_empty_not_is(task_name);
  assert(ne);
}
