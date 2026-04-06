import { list_to_dictionary_value } from "../../../love/public/src/list_to_dictionary_value.mjs";
import { list_map_property_get } from "../../../love/public/src/list_map_property_get.mjs";
import { functions_names_to_paths } from "../../../love/public/src/functions_names_to_paths.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
import { function_acronym_to_name } from "../../../love/public/src/function_acronym_to_name.mjs";
import { function_alias_add_generic } from "../../../love/public/src/function_alias_add_generic.mjs";
export async function function_name_unalias(f_name) {
  arguments_assert(arguments, 1);
  var v2 = await function_alias_add_generic(f_name);
  let unaliased_actual = property_get(v2, "unaliased");
  let exists = property_get(v2, "exists");
  let r = await function_acronym_to_name(f_name);
  let expandeds = property_get(r, "expandeds");
  let expanded = property_get(r, "expanded");
  let dictionary = await functions_names_to_paths();
    let c = property_get_curried(dictionary);
  let expanded_paths = list_to_dictionary_value(expandeds, c);
  const unaliased = exists
    ? unaliased_actual
    : expanded !== null
      ? expanded
      : f_name;
  let v = {
    unaliased,
    expandeds: expanded_paths,
  };
  return v;
}
