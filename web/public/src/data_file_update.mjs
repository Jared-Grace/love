import { function_path_to_name } from "./function_path_to_name.mjs";
import { marker } from "./marker.mjs";
export function data_file_update(f_path) {
  let f_name = function_path_to_name(f_path);
  marker("1");
}
