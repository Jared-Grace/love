import { property_get } from "./property_get.mjs";
import { function_name_unalias } from "./function_name_unalias.mjs";
export async function function_name_unalias_only(name) {
  "The real name behind an alias or an acronym and nothing else, for a caller that wants the name rather than the account of how it was found.";
  let u = await function_name_unalias(name);
  let unaliased = property_get(u, "unaliased");
  return unaliased;
}
