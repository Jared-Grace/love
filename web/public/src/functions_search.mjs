import { marker } from "../../../love/public/src/marker.mjs";
import { search_generic } from "../../../love/public/src/search_generic.mjs";
import { function_name_to_path } from "../../../love/public/src/function_name_to_path.mjs";
import { functions_names } from "../../../love/public/src/functions_names.mjs";
export async function functions_search(search) {
  marker("1");
  let f_names = await functions_names();
  let result = search_generic(
    search,
    f_names,
    function_name_to_path,
    string_includes,
  );
  return result;
}
