import { assert } from "../../../love/public/src/assert.mjs";
import { function_exists } from "../../../love/public/src/function_exists.mjs";
export async function function_exists_assert(f_name) {
  let { exists } = await function_exists(f_name);
  assert(exists);
}
