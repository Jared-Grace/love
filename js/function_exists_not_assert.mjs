import { function_exists_not } from "./function_exists_not.mjs";
import { assert } from "./assert.mjs";
export async function function_exists_not_assert(f_name) {
  let n = await function_exists_not(f_name);
  assert(n);
}
