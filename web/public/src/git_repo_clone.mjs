import { repo_path } from "../../../love/public/src/repo_path.mjs";
import { command_line_git_current } from "../../../love/public/src/command_line_git_current.mjs";
import { git_repo_url } from "../../../love/public/src/git_repo_url.mjs";
export async function git_repo_clone(user, repo) {
  const url = git_repo_url(user, repo);
  let folder_name = repo_path(repo);
  await command_line_git_current("clone " + url + " " + folder_name);
}
