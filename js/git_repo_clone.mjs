import { repo_path } from "./repo_path.mjs";
import { command_line_git_current } from "./command_line_git_current.mjs";
import { git_repo_url } from "./git_repo_url.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function git_repo_clone(user, repo) {
  let url = git_repo_url(user, repo);
  let folder_name = repo_path(repo);
  await command_line_git_current(
    text_combine_multiple(["clone ", url, " ", folder_name]),
  );
}
