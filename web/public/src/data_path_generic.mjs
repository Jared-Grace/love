import { data_folder } from "../../../love/public/src/data_folder.mjs";
import { file_name_json_folder } from "../../../love/public/src/file_name_json_folder.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function data_path_generic(suffix, f_name_unsuffixed) {
  marker("1");
  const f_name = f_name_unsuffixed + suffix;
  const folder = data_folder();
  let f_path = file_name_json_folder(folder, f_name);
  return f_path;
}
