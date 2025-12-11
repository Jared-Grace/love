import { marker } from "../../../love/public/src/marker.mjs";
import { functions_names } from "../../../love/public/src/functions_names.mjs";
import { function_name_to_path } from "../../../love/public/src/function_name_to_path.mjs";
import { search_generic } from "../../../love/public/src/search_generic.mjs";
export async function functions_search_generic(search, fn) {
  marker("1");
  let f_names = await functions_names();
  let result2 = search_generic(search, f_names, function_name_to_path, fn);
  return result2;
}
