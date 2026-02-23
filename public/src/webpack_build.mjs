import { function_name_combine } from "../../../love/public/src/function_name_combine.mjs";
import { function_name_to_base } from "../../../love/public/src/function_name_to_base.mjs";
import { folder_scripts_join } from "../../../love/public/src/folder_scripts_join.mjs";
import { app_shared_name_search_main } from "../../../love/public/src/app_shared_name_search_main.mjs";
import { file_delete_after } from "../../../love/public/src/file_delete_after.mjs";
export async function webpack_build(search) {
  let f_name = await app_shared_name_search_main(search);
  let combined = function_name_combine(f_name, "run");
  let path = folder_scripts_join(combined);
  let f_name_ext = function_name_to_base(path);
  return f_name_ext;
  async function lambda(temp_path) {}
  let result = await file_delete_after(lambda, f_name_ext);
}
