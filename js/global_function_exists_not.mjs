import { not } from "./not.mjs";
import { global_function_exists } from "./global_function_exists.mjs";
export function global_function_exists_not(fn) {
  let exists = global_function_exists(fn);
  let ne = not(exists);
  return ne;
}
