import { file_copy } from "../../../love/public/src/file_copy.mjs";
import { data_path_generic } from "../../../love/public/src/data_path_generic.mjs";
import { data_path } from "../../../love/public/src/data_path.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function data_copy(property_name) {
  marker("1");
  let f_path_from = data_path();
  let f_path_to = data_path_generic("", property_name);
  await file_copy(f_path_from, f_path_to);
  return f_path_to;
}
