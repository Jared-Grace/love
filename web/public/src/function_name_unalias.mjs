import { function_alias_add_generic } from "./function_alias_add_generic.mjs";
export async function function_name_unalias(f_name) {
  var { exists, unaliased } = await function_alias_add_generic(f_name);
  return exists ? unaliased : f_name;
}
