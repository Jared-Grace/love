import { git_push_folder } from "../../../love/public/src/git_push_folder.mjs";
import { repos_paths_map_unordered } from "../../../love/public/src/repos_paths_map_unordered.mjs";
export async function git_push_repos() {
  await repos_paths_map_unordered(each_folder);
  async function each_folder(folder) {
    await git_push_folder(folder);
  }
}
