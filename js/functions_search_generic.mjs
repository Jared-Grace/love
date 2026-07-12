import { properties_get } from "./properties_get.mjs";
import { property_get_curried } from "./property_get_curried.mjs";
import { functions_names_to_paths } from "./functions_names_to_paths.mjs";
import { search_generic } from "./search_generic.mjs";
export async function functions_search_generic(search, fn) {
  let r = await functions_names_to_paths();
  let r2 = property_get_curried(r);
  let properties = properties_get(r);
  let result = search_generic(search, properties, r2, fn);
  return result;
}
