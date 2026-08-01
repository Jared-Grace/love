import { property_not } from "./property_not.mjs";
import { function_exists } from "./function_exists.mjs";
export async function function_exists_not(f_name) {
  let v = await function_exists(f_name);
  let n = property_not(v, "exists");
  return n;
}
