import { function_exists_not } from "../../../love/public/src/function_exists_not.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { assert } from "../../../love/public/src/assert.mjs";
export async function function_exists_not_assert(f_name) {
  let n = await function_exists_not(f_name);
  assert(n);
}
