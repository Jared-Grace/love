import { data_generate } from "../../../love/public/src/data_generate.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { file_write } from "../../../love/public/src/file_write.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { file_exists } from "../../../love/public/src/file_exists.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { file_read_json } from "../../../love/public/src/file_read_json.mjs";
import { json_format_to } from "../../../love/public/src/json_format_to.mjs";
import { data_path } from "../../../love/public/src/data_path.mjs";
export async function data_all(file_path) {
  marker("1");
  let data = {};
  let d_path = data_path();
  if (equal(file_path, d_path)) {
    await data_generate(data);
  } else {
    let exists = await file_exists(file_path);
    if (not(exists)) {
      let contents = json_format_to({});
      await file_write(file_path, contents);
    }
    data = await file_read_json(file_path);
  }
  let v = {
    data,
    file_path,
  };
  return v;
}
