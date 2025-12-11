import { function_name_to_path } from "../../../love/public/src/function_name_to_path.mjs";
import { search_generic } from "../../../love/public/src/search_generic.mjs";
export function functions_search_generic(search, f_names, fn) {
  let result2 = search_generic(search, f_names, function_name_to_path, fn);
  return result2;
}
