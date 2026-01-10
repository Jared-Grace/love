import { function_path_to_name } from "../../../love/public/src/function_path_to_name.mjs";
import { functions_names } from "../../../love/public/src/functions_names.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { file_js_parse } from "../../../love/public/src/file_js_parse.mjs";
import { data_file_update_inner } from "../../../love/public/src/data_file_update_inner.mjs";
import { data_save } from "../../../love/public/src/data_save.mjs";
import { data_all } from "../../../love/public/src/data_all.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { data_path } from "../../../love/public/src/data_path.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
export async function data_file_update(f_path) {
  let f_names = await functions_names();
  let f_name = function_path_to_name(f_path);
  let n = list_includes_not(f_names, f_name);
  if (n) {
    return;
  }
  console.log(f_path);
  let d_path = data_path();
  var d = await data_all(d_path);
  let parsed = await file_js_parse(f_path);
  await data_file_update_inner(parsed, d);
  await data_save(d);
  marker("1");
  return;
}
