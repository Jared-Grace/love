import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
import { repos_paths_map_unordered } from "./repos_paths_map_unordered.mjs";
import { git_ac_call_folder_try_curried_right_2 } from "./git_ac_call_folder_try_curried_right_2.mjs";
export async function git_ac_call_repos(f_name, args) {
  "The folders that are not repos are dropped rather than carried as blanks, so";
  "what comes back is a record per repo that was really asked — the same list the";
  "by-name commit hands back, and readable the same way.";
  let each_folder = await git_ac_call_folder_try_curried_right_2(f_name, args);
  let all = await repos_paths_map_unordered(each_folder);
  let real = list_filter_null_not_is(all);
  return real;
}
