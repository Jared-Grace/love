import { folder_read_recursive_async } from "./folder_read_recursive_async.mjs";
import { web_assets_folder } from "./web_assets_folder.mjs";
export async function web_assets_paths() {
  "Every asset there is, each said as where it sits under the assets folder.";
  "That is the same piece of path storage is asked for, so this one reading answers both what to upload and what a browser may ask for.";
  let folder = web_assets_folder();
  let paths = await folder_read_recursive_async(folder);
  return paths;
}
