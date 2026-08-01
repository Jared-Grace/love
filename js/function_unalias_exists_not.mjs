import { property_not } from "./property_not.mjs";
import { function_unalias_exists } from "./function_unalias_exists.mjs";
export async function function_unalias_exists_not(f_name) {
  let v = await function_unalias_exists(f_name);
  let n = property_not(v, "exists");
  return n;
}
