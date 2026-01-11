import { data_generate } from "../../../love/public/src/data_generate.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { file_read_json } from "../../../love/public/src/file_read_json.mjs";
import { data_path } from "../../../love/public/src/data_path.mjs";
import { data_all_initialize } from "../../../love/public/src/data_all_initialize.mjs";
export async function data_all(file_path) {
  marker("1");
  let data = {};
  let d_path = data_path();
  if (equal(file_path, d_path)) {
    await data_generate(data);
  } else {
    await data_all_initialize(file_path);
    data = await file_read_json(file_path);
  }
  let v = {
    data,
    file_path,
  };
  return v;
}
