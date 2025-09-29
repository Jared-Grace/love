import { file_write } from "../../../love/public/src/file_write.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { file_exists } from "../../../love/public/src/file_exists.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { file_read_json } from "../../../love/public/src/file_read_json.mjs";
import { json_format_to } from "../../../love/public/src/json_format_to.mjs";
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
