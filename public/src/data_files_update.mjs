import { functions_paths } from "./functions_paths.mjs";
import { each_async } from "./each_async.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
import { list_map } from "./list_map.mjs";
import { functions_names } from "./functions_names.mjs";
import { data_file_update } from "./data_file_update.mjs";
import { marker } from "./marker.mjs";
export async function data_files_update() {
  let f_paths = functions_paths();
  marker("1");
  await each_async(f_paths, data_file_update);
}
