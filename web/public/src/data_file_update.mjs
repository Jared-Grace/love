import { file_js_parse } from "./file_js_parse.mjs";
import { data_file_update_inner } from "./data_file_update_inner.mjs";
import { data_save } from "./data_save.mjs";
import { data_all } from "./data_all.mjs";
import { marker } from "./marker.mjs";
export async function data_file_update(f_path) {
  var d = await data_all();
  let parsed = await file_js_parse(f_path2);
  await data_file_update_inner(f_path, d);
  await data_save(d);
  marker("1");
}
