import { file_read_json } from "./file_read_json.mjs";
export async function data_all() {
  const file_path = "data.json";
  let data = await file_read_json(file_path);
  let v = {
    data,
    file_path,
  };
  return v;
}
