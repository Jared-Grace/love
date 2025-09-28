import { file_name_json } from "./file_name_json.mjs";
export function data_path_generic(inner) {
  let v = "data" + inner + ".json";
  return v;
  let v3 = file_name_json("data" + inner);
}
