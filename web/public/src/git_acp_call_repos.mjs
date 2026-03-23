import { git_folder_is } from "../../../love/public/src/git_folder_is.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { git_acp_call_folder } from "../../../love/public/src/git_acp_call_folder.mjs";
import { repos_paths_map_unordered } from "../../../love/public/src/repos_paths_map_unordered.mjs";
export async function git_acp_call_repos(f_name, args) {
  await repos_paths_map_unordered(each_folder);
  async function each_folder(folder) {
    log(git_acp_call_repos.name, {
      folder,
    });
    let is = await git_folder_is(folder);
    if (is) {
      await git_acp_call_folder(f_name, args, folder);
    }
  }
}
