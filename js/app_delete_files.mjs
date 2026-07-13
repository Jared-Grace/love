import { app_shared_name_search_info } from "./app_shared_name_search_info.mjs";
import { property_get } from "./property_get.mjs";
import { file_delete_if_exists } from "./file_delete_if_exists.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
export async function app_delete_files(name) {
  let info = await app_shared_name_search_info(name);
  let paths = [
    property_get(info, "f_path"),
    property_get(info, "f_path_dev"),
    property_get(info, "f_path_latest"),
    property_get(info, "src_path"),
    property_get(info, "src_path_latest"),
  ];
  await list_map_unordered_async(paths, file_delete_if_exists);
}
