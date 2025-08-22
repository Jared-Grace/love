import { search_generic } from "./search_generic.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
import { functions_names } from "./functions_names.mjs";
export async function functions_search(search) {
  let f_names = functions_names();
  let result = search_generic(search, f_names, function_name_to_path);
  return result;
}
