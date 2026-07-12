import { function_exists } from "./function_exists.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
export async function function_exists_not(f_name) {
  let v = await function_exists(f_name);
  let exists = property_get(v, "exists");
  let n = not(exists);
  return n;
}
