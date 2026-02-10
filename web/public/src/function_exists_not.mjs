import { function_exists } from "../../../love/public/src/function_exists.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { not } from "../../../love/public/src/not.mjs";
export async function function_exists_not(f_name) {
  let v = await function_exists(f_name);
  let exists = property_get(v, "exists");
  let n = not(exists);
  return n;
}
