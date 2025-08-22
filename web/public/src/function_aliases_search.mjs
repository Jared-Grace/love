import { search_generic } from "./search_generic.mjs";
import { function_aliases_inverted } from "./function_aliases_inverted.mjs";
import { object_properties } from "./object_properties.mjs";
import { object_property_get } from "./object_property_get.mjs";
export async function function_aliases_search(search) {
  let names_to_aliases = await function_aliases_inverted();
  let names = object_properties(names_to_aliases);
  function lambda(n) {
    let value = object_property_get(names_to_aliases, n);
    return value;
  }
  let result = search_generic(search, names, lambda);
  return result;
}
