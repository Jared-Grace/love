import { function_unalias_exists_not } from "./function_unalias_exists_not.mjs";
import { assert } from "./assert.mjs";
export async function function_unalias_exists_not_assert(f_name) {
  let n = await function_unalias_exists_not(f_name);
  assert(n);
}
