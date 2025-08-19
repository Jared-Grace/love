import { data_file_update } from "./data_file_update.mjs";
import { marker } from "./marker.mjs";
export async function data_file_update_all(f_path) {
  marker("1");
  let v = await data_file_update(f_path);
  return v;
}
