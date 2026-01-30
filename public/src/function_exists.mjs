import { function_name_to_path_search } from "../../../love/public/src/function_name_to_path_search.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function function_exists(f_name) {
  marker("1");
  let result = await function_name_to_path_search(unaliased);
  return result;
}
