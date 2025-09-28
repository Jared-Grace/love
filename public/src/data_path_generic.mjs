import { file_name_json_folder } from "./file_name_json_folder.mjs";
import { marker } from "./marker.mjs";
export function data_path_generic(suffix, f_name_unsuffixed) {
  marker("1");
  const f_name = f_name_unsuffixed + suffix;
  const folder = "data";
  let f_path = file_name_json_folder(folder, f_name);
  return f_path;
}
