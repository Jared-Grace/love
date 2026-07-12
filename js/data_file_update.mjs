import { function_path_to_name } from "./function_path_to_name.mjs";
import { functions_names } from "./functions_names.mjs";
import { file_js_parse } from "./file_js_parse.mjs";
import { data_file_update_inner } from "./data_file_update_inner.mjs";
import { data_save } from "./data_save.mjs";
import { data_all } from "./data_all.mjs";
import { data_path } from "./data_path.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
export async function data_file_update(f_path) {
  return;
  let f_names = await functions_names();
  let f_name = function_path_to_name(f_path);
  let n = list_includes_not(f_names, f_name);
  if (n) {
    return;
  }
  let d_path = data_path();
  var d = await data_all(d_path);
  let parsed = await file_js_parse(f_path);
  data_file_update_inner(parsed, d);
  await data_save(d);
  return;
}
