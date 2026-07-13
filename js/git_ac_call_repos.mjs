import { repos_paths_map_unordered } from "../../love/js/repos_paths_map_unordered.mjs";
import { git_ac_call_folder_try_curried_right_2 } from "../../love/js/git_ac_call_folder_try_curried_right_2.mjs";
export async function git_ac_call_repos(f_name, args) {
  let each_folder = await git_ac_call_folder_try_curried_right_2(f_name, args);
  await repos_paths_map_unordered(each_folder);
}
