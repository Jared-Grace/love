import { catch_log_async } from "./catch_log_async.mjs";
import { git_mirrors_refresh } from "./git_mirrors_refresh.mjs";
import { log } from "./log.mjs";
import { git_push_folder_try } from "./git_push_folder_try.mjs";
import { repos_paths_map_unordered } from "./repos_paths_map_unordered.mjs";
export async function git_push_repos() {
  await repos_paths_map_unordered(each_folder);
  await catch_log_async(git_mirrors_refresh);
  async function each_folder(folder) {
    log(git_push_repos.name, {
      folder,
    });
    await git_push_folder_try(folder);
  }
}
