import { js_code_import_single } from "../../../love/public/src/js_code_import_single.mjs";
import { path_join } from "../../../love/public/src/path_join.mjs";
import { function_name_combine } from "../../../love/public/src/function_name_combine.mjs";
import { function_name_to_base } from "../../../love/public/src/function_name_to_base.mjs";
import { folder_scripts_join } from "../../../love/public/src/folder_scripts_join.mjs";
import { app_shared_name_search_main } from "../../../love/public/src/app_shared_name_search_main.mjs";
import { file_delete_after } from "../../../love/public/src/file_delete_after.mjs";
export async function webpack_build(search) {
  let f_name = await app_shared_name_search_main(search);
  let combined = function_name_combine(f_name, "run");
  let path2 = path_join(["temp", combined]);
  let path = folder_scripts_join(path2);
  let f_name_ext = function_name_to_base(path);
  async function lambda(temp_path) {
    let v = js_code_import_single(f_name, from);
  }
  let result = await file_delete_after(f_name_ext, lambda);
}
