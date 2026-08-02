import { equal } from "./equal.mjs";
import { global_function_get } from "./global_function_get.mjs";
import { global_function_exists } from "./global_function_exists.mjs";
import { not } from "./not.mjs";
export function storage_local_enabled() {
  let set = global_function_exists(storage_local_enabled);
  let left = global_function_get(storage_local_enabled);
  let enabled = not(set) || equal(left, true);
  return enabled;
}
