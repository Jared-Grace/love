import { property_get_curried } from "../../../love/public/src/property_get_curried.mjs";
import { functions_names_paths } from "../../../karate_code/public/src/functions_names_paths.mjs";
import { functions_names } from "../../../love/public/src/functions_names.mjs";
import { function_name_to_path } from "../../../love/public/src/function_name_to_path.mjs";
import { search_generic } from "../../../love/public/src/search_generic.mjs";
export async function functions_search_generic(search, fn) {
  let f_names = await functions_names();
  let result2 = search_generic(search, f_names, function_name_to_path, fn);
  return result2;
  let r = await functions_names_paths();
  let r2 = property_get_curried(object);
}
