import { assert } from "../../../love/public/src/assert.mjs";
import { function_exists_not } from "../../../love/public/src/function_exists_not.mjs";
export async function function_exists_not_assert(f_name) {
  let n = await function_exists_not(f_name);
  assert(n);
}
