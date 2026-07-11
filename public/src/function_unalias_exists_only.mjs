import { property_get } from "../../../love/public/src/property_get.mjs";
import { function_unalias_exists } from "../../../love/public/src/function_unalias_exists.mjs";
export async function function_unalias_exists_only(f_name) {
  let v = await function_unalias_exists(f_name);
  let exists = property_get(v, "exists");
  return exists;
}
