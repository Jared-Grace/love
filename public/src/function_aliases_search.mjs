import { property_get_curried } from "../../../love/public/src/property_get_curried.mjs";
import { text_includes } from "../../../love/public/src/text_includes.mjs";
import { search_generic } from "../../../love/public/src/search_generic.mjs";
import { function_aliases_inverted } from "../../../love/public/src/function_aliases_inverted.mjs";
import { properties_get } from "../../../love/public/src/properties_get.mjs";
export async function function_aliases_search(search) {
  let names_to_aliases = await function_aliases_inverted();
  let names = properties_get(names_to_aliases);
  let r2 = property_get_curried(names_to_aliases);
  let result = search_generic(search, names, r2, text_includes);
  return result;
}
