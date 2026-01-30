import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { function_exists_unalias } from "../../../love/public/src/function_exists_unalias.mjs";
import { function_delete } from "../../../love/public/src/function_delete.mjs";
export async function function_delete_if_exists(f_name) {
  const v = await function_exists_unalias(f_name);
  let exists = object_property_get(v, "exists");
  if (exists) {
    await function_delete(f_name);
  }
}
