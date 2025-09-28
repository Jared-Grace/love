import { file_name_json } from "./file_name_json.mjs";
export function data_path_generic(inner) {
  let v = file_name_json("data" + inner);
  return v;
}
