import { property_get } from "../../../love/public/src/property_get.mjs";
import { function_name_unalias } from "../../../love/public/src/function_name_unalias.mjs";
export async function function_name_unalias_only(name) {
  let v2 = await function_name_unalias(name);
  let unaliased = property_get(v2, "unaliased");
  return unaliased;
}
