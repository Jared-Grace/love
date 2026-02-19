import { file_copy_overwrite } from "../../../love/public/src/file_copy_overwrite.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_shared_name_search_info } from "../../../love/public/src/app_shared_name_search_info.mjs";
export async function html_update_public_new(search) {
  let info = await app_shared_name_search_info(search);
  let f_path_latest = property_get(info, "f_path_latest");
  let f_path = property_get(info, "f_path");
  await file_copy_overwrite(file_path_old, file_path_new);
}
