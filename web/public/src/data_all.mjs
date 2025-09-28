import { file_write } from "./file_write.mjs";
import { not } from "./not.mjs";
import { file_exists } from "./file_exists.mjs";
import { marker } from "./marker.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { json_format_to } from "./json_format_to.mjs";
export async function data_all(file_path) {
  marker("1");
  let exists = await file_exists(file_path);
  if (not(exists)) {
    let contents = json_format_to({});
    await file_write(file_path, contents);
  }
  let data = await file_read_json(file_path);
  let v = {
    data,
    file_path,
  };
  return v;
}
