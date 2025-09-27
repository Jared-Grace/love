import { marker } from "./marker.mjs";
import { file_read_json } from "./file_read_json.mjs";
export async function data_all(f_path) {
  marker("1");
  const file_path = "data.json";
  let data = await file_read_json(file_path);
  let v = {
    data,
    file_path,
  };
  return v;
}
