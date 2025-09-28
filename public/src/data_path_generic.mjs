import { marker } from "./marker.mjs";
import { path_join } from "./path_join.mjs";
import { file_name_json } from "./file_name_json.mjs";
export function data_path_generic(suffix, f_name_unsuffixed) {
  marker("1");
  const f_name = f_name_unsuffixed + suffix;
  const folder = "data";
  let joined = path_join([folder, f_name]);
  let f_path = file_name_json(joined);
  return f_path;
}
