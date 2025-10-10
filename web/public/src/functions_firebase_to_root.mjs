import { function_name_to_path_search } from "../../../love/public/src/function_name_to_path_search.mjs";
import { functions_paths } from "../../../love/public/src/functions_paths.mjs";
import { functions_names } from "../../../love/public/src/functions_names.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function functions_firebase_to_root() {
  marker("1");
  let f_names = await functions_names();
  async function lambda(f_name) {
    let search = await function_name_to_path_search(f_name);
    let joined = await functions_paths();
  }
  await each_async(f_names, lambda);
}
