import { function_alias_add_generic } from "./function_alias_add_generic.mjs";
export async function function_name_unalias(f_name) {
  var { exists, unaliased: unaliased_actual } =
    await function_alias_add_generic(f_name);
  const unaliased = exists ? unaliased_actual : f_name;
  return unaliased;
}
