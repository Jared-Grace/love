import { marker } from "./marker.mjs";
import { path_join } from "./path_join.mjs";
import { file_name_json } from "./file_name_json.mjs";
export function data_path_generic(suffix, f_name) {
  marker("1");
  const newLocal = f_name + suffix;
  let joined = path_join(["data", newLocal]);
  let f_path = file_name_json(joined);
  return f_path;
}
