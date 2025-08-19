import { list_map } from "./list_map.mjs";
import { functions_names } from "./functions_names.mjs";
import { data_file_update } from "./data_file_update.mjs";
import { marker } from "./marker.mjs";
export async function data_files_update() {
  let f_names = functions_names();
  function lambda(item) {}
  let mapped = list_map(list, lambda);
  marker("1");
  let v = await data_file_update(f_path);
  return v;
}
