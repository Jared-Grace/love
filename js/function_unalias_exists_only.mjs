import { property_get } from "./property_get.mjs";
import { function_unalias_exists } from "./function_unalias_exists.mjs";
export async function function_unalias_exists_only(f_name) {
  let v = await function_unalias_exists(f_name);
  let exists = property_get(v, "exists");
  return exists;
}
