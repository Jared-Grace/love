import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { function_exists_unalias } from "../../../love/public/src/function_exists_unalias.mjs";
export async function function_exists_not(f_name) {
  let v = await function_exists_unalias(f_name);
  let exists = object_property_get(v, "exists");
  let n = not(exists);
  return n;
}
