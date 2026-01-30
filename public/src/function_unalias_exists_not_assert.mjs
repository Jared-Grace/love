import { marker } from "../../../love/public/src/marker.mjs";
import { function_unalias_exists_not } from "../../../love/public/src/function_unalias_exists_not.mjs";
import { assert } from "../../../love/public/src/assert.mjs";
export async function function_unalias_exists_not_assert(f_name) {
  marker("1");
  let n = await function_unalias_exists_not(f_name);
  assert(n);
}
