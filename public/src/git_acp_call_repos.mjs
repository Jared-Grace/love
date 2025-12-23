import { marker } from "../../../love/public/src/marker.mjs";
import { git_acp_call_folder } from "../../../love/public/src/git_acp_call_folder.mjs";
import { repos_paths_map_unordered } from "../../../love/public/src/repos_paths_map_unordered.mjs";
export async function git_acp_call_repos(f_name, args) {
  marker("1");
  await repos_paths_map_unordered(each_folder);
  return result;
  async function each_folder(folder) {
    await git_acp_call_folder(f_name, args, folder);
  }
}
