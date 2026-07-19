import { file_copy_overwrite_from_properties } from "./file_copy_overwrite_from_properties.mjs";
import { app_shared_name_search_info } from "./app_shared_name_search_info.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_frozen_assert } from "./app_shared_frozen_assert.mjs";
export async function html_public_from_latest(search) {
  let info = await app_shared_name_search_info(search);
  let a_name = property_get(info, "a_name");
  app_shared_frozen_assert(a_name);
  await file_copy_overwrite_from_properties(
    info,
    "src_path_latest",
    "src_path",
  );
  await file_copy_overwrite_from_properties(info, "f_path_latest", "f_path");
}
