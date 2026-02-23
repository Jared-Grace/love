import { js_code_string } from "../../../love/public/src/js_code_string.mjs";
import { exit } from "../../../love/public/src/exit.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_shared_name_search_info } from "../../../love/public/src/app_shared_name_search_info.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { file_overwrite } from "../../../love/public/src/file_overwrite.mjs";
import { folder_previous_2_join } from "../../../love/public/src/folder_previous_2_join.mjs";
import { js_code_import_single } from "../../../love/public/src/js_code_import_single.mjs";
import { path_join } from "../../../love/public/src/path_join.mjs";
import { function_name_combine } from "../../../love/public/src/function_name_combine.mjs";
import { function_name_to_base } from "../../../love/public/src/function_name_to_base.mjs";
import { folder_scripts_join } from "../../../love/public/src/folder_scripts_join.mjs";
import { file_delete_after } from "../../../love/public/src/file_delete_after.mjs";
export async function webpack_build(search) {
  let a = await app_shared_name_search_info(search);
  let f_name = property_get(a, "f_name");
  let main_path = property_get(a, "main_path");
  let combined = function_name_combine(f_name, "run");
  let path2 = path_join(["temp", combined]);
  let path = folder_scripts_join(path2);
  let f_name_ext = function_name_to_base(path);
  async function lambda(temp_path) {
    let joined = folder_previous_2_join(main_path);
    let code_string = js_code_string(joined);
    let i = js_code_import_single(f_name, code_string);
    log({
      i,
    });
    exit();
    await file_overwrite(temp_path, contents);
  }
  let result = await file_delete_after(f_name_ext, lambda);
}
