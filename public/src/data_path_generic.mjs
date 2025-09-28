import { marker } from "./marker.mjs";
import { path_join } from "./path_join.mjs";
import { file_name_json } from "./file_name_json.mjs";
export function data_path_generic(inner, f_name) {
  marker("1");
  let joined = path_join(["data", f_name + inner]);
  let f_path = file_name_json(joined);
  return f_path;
}
