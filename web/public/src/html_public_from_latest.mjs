import { log } from "../../../love/public/src/log.mjs";
import { file_copy_overwrite } from "../../../love/public/src/file_copy_overwrite.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_shared_name_search_info } from "../../../love/public/src/app_shared_name_search_info.mjs";
export async function html_public_from_latest(search) {
  let info = await app_shared_name_search_info(search);
  let src_path_latest = property_get(info, "src_path_latest");
  let src_path = property_get(info, "src_path");
  log({src_path_latest, src_path});
  await file_copy_overwrite(src_p