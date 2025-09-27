import { path_join } from "./path_join.mjs";
import { repos_folder } from "./repos_folder.mjs";
import { command_line_git } from "./command_line_git.mjs";
import { git_repo_url } from "./git_repo_url.mjs";
import { marker } from "./marker.mjs";
export async function git_repo_clone(user, repo) {
  marker("1");
  const url = git_repo_url(user, repo);
  let path_folder = repos_folder();
  let v = path_join(segments);
  await command_line_git("clone " + url + " " + folder_name);
}
