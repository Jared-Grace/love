import { function_exists } from "./function_exists.mjs";
import { assert } from "./assert.mjs";
import { marker_first } from "./marker_first.mjs";
import { marker_current_set } from "./marker_current_set.mjs";
import { data_transform } from "./data_transform.mjs";
export async function function_current_set(f_name) {
  assert(await function_exists(f_name));
  await data_transform("function_current", null, (previous) => f_name);
  let name = marker_first();
  await marker_current_set(name);
}
