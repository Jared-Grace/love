import { list_join_slash_forward } from "./list_join_slash_forward.mjs";
import { web_assets_folder_name } from "./web_assets_folder_name.mjs";
export function web_assets_destination(path) {
  "$plain path";
  "Where one asset is written in storage, given where it sits under the assets folder.";
  "The separators are forward slashes because a storage path is a URL path and not a path on any disk.";
  let folder_name = web_assets_folder_name();
  let destination = list_join_slash_forward([folder_name, path]);
  return destination;
}
