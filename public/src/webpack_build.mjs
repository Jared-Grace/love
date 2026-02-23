import { function_name_to_base } from "../../../love/public/src/function_name_to_base.mjs";
import { folder_scripts_join } from "../../../love/public/src/folder_scripts_join.mjs";
import { app_shared_name_search_main } from "../../../love/public/src/app_shared_name_search_main.mjs";
import { file_delete_after } from "../../../love/public/src/file_delete_after.mjs";
export async function webpack_build(search) {
  let f_name = await app_shared_name_search_main(search);
  let path = folder_scripts_join(f_name);
  let f_name_ext = function_name_to_base(f_name2);
  return path;
  async function lambda(temp_path) {}
  let result = await file_delete_after(lambda, temp_path);
}
