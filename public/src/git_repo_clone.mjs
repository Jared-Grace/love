import { repo_path } from "../../../love/public/src/repo_path.mjs";
import { command_line_git } from "../../../love/public/src/command_line_git.mjs";
import { git_repo_url } from "../../../love/public/src/git_repo_url.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function git_repo_clone(user, repo) {
  marker("1");
  const url = git_repo_url(user, repo);
  let folder_name = repo_path(repo);
  await command_line_git("clone " + url + " " + folder_name);
}
