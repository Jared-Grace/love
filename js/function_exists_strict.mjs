import { function_name_to_path_search } from "../../../love/public/src/function_name_to_path_search.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function function_exists_strict(f_name) {
  marker("1");
  let result = await function_name_to_path_search(f_name);
  return result;
}
