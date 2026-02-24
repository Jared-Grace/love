import { file_copy_overwrite_from_properties } from "../../../love/public/src/file_copy_overwrite_from_properties.mjs";
import { app_shared_name_search_info } from "../../../love/public/src/app_shared_name_search_info.mjs";
export async function html_public_from_latest(search) {
  let info = await app_shared_name_search_info(search);
  const from = "src_path_latest";
  const to = "src_path";
  await file_copy_overwrite_from_properties(info, from, to);
}
