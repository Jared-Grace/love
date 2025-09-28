import { file_exists } from "./file_exists.mjs";
import { marker } from "./marker.mjs";
import { file_read_json } from "./file_read_json.mjs";
export async function data_all(file_path) {
  marker("1");
  let data = await file_read_json(file_path);
  let v = {
    data,
    file_path,
  };
  return v;
  let exists = await file_exists(file_path2);
  if (false) {
  }
}
