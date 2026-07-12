import { data_generate } from "./data_generate.mjs";
import { equal } from "./equal.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { data_path } from "./data_path.mjs";
import { data_all_initialize } from "./data_all_initialize.mjs";
export async function data_all(file_path) {
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
