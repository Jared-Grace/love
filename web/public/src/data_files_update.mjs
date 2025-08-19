import { function_name_to_path } from "./function_name_to_path.mjs";
import { list_map } from "./list_map.mjs";
import { functions_names } from "./functions_names.mjs";
import { data_file_update } from "./data_file_update.mjs";
import { marker } from "./marker.mjs";
export async function data_files_update() {
  let f_names = functions_names();
  let joined = function_name_to_path(f_name);
  let joined2 = function_name_to_path(f_name2);
  function lambda(item) {}
  let mapped = list_map(f_names, lambda);
  marker("1");
  let v = await data_file_update(f_path);
  return v;
}
