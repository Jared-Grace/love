import { data_index_get_import } from "./data_index_get_import.mjs";
import { equal } from "./equal.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { data_path } from "./data_path.mjs";
import { data_all_initialize } from "./data_all_initialize.mjs";
export async function data_all(file_path) {
  let data = {};
  let d_path = data_path();
  if (equal(file_path, d_path)) {
    ("The index is asked for rather than built here, so that a process asking twice folds once. Building it in place was what made the auto pass rebuild the whole thing for every step that consulted it.");
    let index_read = await data_index_get_import();
    data = await index_read();
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
