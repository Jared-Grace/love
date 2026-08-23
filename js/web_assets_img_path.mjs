import { list_join_slash_forward } from "./list_join_slash_forward.mjs";
import { web_assets_img_folder_name } from "./web_assets_img_folder_name.mjs";
export function web_assets_img_path(path) {
  "$plain path";
  "Where one picture sits under the assets folder, given where it sits under the pictures folder.";
  let folder_name = web_assets_img_folder_name();
  let combined = list_join_slash_forward([folder_name, path]);
  return combined;
}
