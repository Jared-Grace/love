import { property_get } from "../../../love/public/src/property_get.mjs";
import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { function_acronym_to_name } from "../../../love/public/src/function_acronym_to_name.mjs";
import { function_alias_add_generic } from "../../../love/public/src/function_alias_add_generic.mjs";
import { log } from "./log.mjs";
export async function function_name_unalias(f_name) {
  assert_arguments(arguments, 1);
  var v2 = await function_alias_add_generic(f_name);
  let unaliased_actual = property_get(v2, "unaliased");
  let exists = property_get(v2, "exists");
  let v3 = await function_acronym_to_name(f_name);
  let expandeds = property_get(v3, "expandeds");
  let expanded = property_get(v3, "expanded");
  const unaliased = exists
    ? unaliased_actual
    : expanded !== null
      ? expanded
      : f_name;
  let v = {
    unaliased,
    expandeds,
  };
  return v;
}
