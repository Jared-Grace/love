import { text_includes } from "../../../love/public/src/text_includes.mjs";
import { search_generic } from "../../../love/public/src/search_generic.mjs";
import { function_aliases_inverted } from "../../../love/public/src/function_aliases_inverted.mjs";
import { object_properties_get } from "../../../love/public/src/object_properties_get.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export async function function_aliases_search(search) {
  let names_to_aliases = await function_aliases_inverted();
  let names = object_properties_get(names_to_aliases);
  function lambda(n) {
    let value = object_property_get(names_to_aliases, n);
    return value;
  }
  let result = search_generic(search, names, lambda, text_includes);
  return result;
}
