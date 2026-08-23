import { repo_path_combine } from "./repo_path_combine.mjs";
import { web_assets_folder_name } from "./web_assets_folder_name.mjs";
export function web_assets_folder() {
  "The assets folder as a full path on this machine, which is where the files that get uploaded are kept.";
  "IT SITS OUTSIDE THE PUBLISHED FOLDER, which is the whole point of it. Anything under the published folder rides along in every hosting deploy; these files are fetched from storage instead, so keeping a copy here costs nothing at deploy time and keeps the pictures under version control rather than leaving storage as the only copy of them.";
  let folder_name = web_assets_folder_name();
  let combined = repo_path_combine("love", folder_name);
  return combined;
}
