import { list_join_slash_forward } from "./list_join_slash_forward.mjs";
import { web_assets_app_folder_name } from "./web_assets_app_folder_name.mjs";
export function web_assets_app_img_path(app_name, img_name) {
  "$plain app_name";
  "$plain img_name";
  "Where one app's own picture sits under the assets folder.";
  let folder_name = web_assets_app_folder_name();
  let combined = list_join_slash_forward([folder_name, app_name, img_name]);
  return combined;
}
