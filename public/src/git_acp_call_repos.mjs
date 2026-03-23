import { git_acp_call_folder_try_curried_right_2 } from "../../../love/public/src/git_acp_call_folder_try_curried_right_2.mjs";
import { repos_paths_map_unordered } from "../../../love/public/src/repos_paths_map_unordered.mjs";
export async function git_acp_call_repos(f_name, args) {
  let each_folder = await git_acp_call_folder_try_curried_right_2(f_name, args);
  await repos_paths_map_unordered(each_folder);
}
