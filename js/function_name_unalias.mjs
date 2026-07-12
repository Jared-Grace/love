import { functions_names_to_paths_list } from "./functions_names_to_paths_list.mjs";
import { property_get } from "./property_get.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { function_acronym_to_name } from "./function_acronym_to_name.mjs";
import { function_alias_add_generic } from "./function_alias_add_generic.mjs";
export async function function_name_unalias(f_name) {
  arguments_assert(arguments, 1);
  var v2 = await function_alias_add_generic(f_name);
  let unaliased_actual = property_get(v2, "unaliased");
  let exists_alias = property_get(v2, "exists");
  let r = await function_acronym_to_name(f_name);
  let expandeds = property_get(r, "expandeds");
  let expanded = property_get(r, "expanded");
  let expanded_paths = await functions_names_to_paths_list(expandeds);
  let unaliased = exists_alias
    ? unaliased_actual
    : expanded !== null
      ? expanded
      : f_name;
  let v = {
    unaliased,
    expandeds: expanded_paths,
    exists_alias,
  };
  return v;
}
