import { file_name_json } from "./file_name_json.mjs";
export function data_path_generic(inner) {
  let f_path = file_name_json("data/" + "data" + inner);
  return f_path;
}
