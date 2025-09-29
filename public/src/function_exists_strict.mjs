import { function_name_to_path } from "./function_name_to_path.mjs";
import { marker } from "./marker.mjs";
import { function_exists_inner } from "./function_exists_inner.mjs";
export async function function_exists_strict(f_name) {
  marker("1");
    let result = await function_name_to_path_search(f_name);
  return result
}
