import { file_name_json } from "../../../love/public/src/file_name_json.mjs";
import { path_join } from "../../../love/public/src/path_join.mjs";
export function file_name_json_folder(folder, f_name) {
  let joined = path_join([folder, f_name]);
  let f_path = file_name_json(joined);
  return f_path;
}
