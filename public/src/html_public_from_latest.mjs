import { file_copy_overwrite_from_properties } from "../../../love/public/src/file_copy_overwrite_from_properties.mjs";
import { app_shared_name_search_info } from "../../../love/public/src/app_shared_name_search_info.mjs";
export async function html_public_from_latest(search) {
  let info = await app_shared_name_search_info(search);
  await file_copy_overwrite_from_properties(
    info,
    "src_path_latest",
    "src_path",
  );
}
