import { path_join } from "./path_join.mjs";
import { web_assets_folder } from "./web_assets_folder.mjs";
export function web_assets_folder_join(path) {
  "$plain path";
  "One asset as a full path on this machine, given where it sits under the assets folder.";
  "The twin of the storage address for the same file, and the reason both are asked for by the same piece of path: what is written here is what gets uploaded there.";
  let folder = web_assets_folder();
  let combined = path_join([folder, path]);
  return combined;
}
