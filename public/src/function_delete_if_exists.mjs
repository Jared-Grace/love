import { property_get } from "../../../love/public/src/property_get.mjs";
import { function_unalias_exists } from "../../../love/public/src/function_unalias_exists.mjs";
import { function_delete } from "../../../love/public/src/function_delete.mjs";
export async function function_delete_if_exists(f_name) {
  const v = await function_unalias_exists(f_name);
  let exists = property_get(v, "exists");
  if (exists) {
    await function_delete(f_name);
  }
}
