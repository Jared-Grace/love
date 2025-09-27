import { command_line_git } from "./command_line_git.mjs";
import { git_repo_url } from "./git_repo_url.mjs";
import { marker } from "./marker.mjs";
export async function git_repo_clone(user, repo) {
  marker("1");
  const url = git_repo_url(user, repo);
  await command_line_git("clone " + " <folder-name>");
}
