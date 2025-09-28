import { file_copy } from "./file_copy.mjs";
import { data_path_generic } from "./data_path_generic.mjs";
import { data_path } from "./data_path.mjs";
import { marker } from "./marker.mjs";
export async function data_copy(f_name) {
  marker("1");
  let f_path_from = data_path();
  let f_path_to = data_path_generic("." + inner, f_name);
  await file_copy(f_path_from, f_path_to);
}
