import { property_get } from "./property_get.mjs";
import { function_name_unalias } from "./function_name_unalias.mjs";
export async function function_name_unalias_only(name) {
  let u = await function_name_unalias(name);
  let unaliased = property_get(u, "unaliased");
  return unaliased;
}
