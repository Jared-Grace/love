import { function_acronym_to_name } from "./function_acronym_to_name.mjs";
import { function_alias_add_generic } from "./function_alias_add_generic.mjs";
export async function function_name_unalias(f_name) {
  var { exists, unaliased: unaliased_actual } =
    await function_alias_add_generic(f_name);
  let expanded = function_acronym_to_name(f_name);
  const unaliased = exists
    ? unaliased_actual
    : expanded !== null
      ? expanded
      : f_name;
  let v = {
    unaliased,
    expanded,
  };
  return v;
}
