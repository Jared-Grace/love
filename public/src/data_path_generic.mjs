import { path_join } from "./path_join.mjs";
import { file_name_json } from "./file_name_json.mjs";
export function data_path_generic(inner) {
  let joined = path_join(["data", "data" + inner]);
  let f_path = file_name_json(joined);
  return f_path;
}
