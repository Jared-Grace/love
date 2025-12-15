import { marker } from "../../../love/public/src/marker.mjs";
import { file_read } from "../../../love/public/src/file_read.mjs";
import { json_from } from "../../../love/public/src/json_from.mjs";
export async function file_read_json(file_path) {
  marker("1");
  let json = await file_read(file_path);
  let data = json_from(json);
  return data;
}
