import { repo_path } from "./repo_path.mjs";
import { git_current_run } from "./git_current_run.mjs";
import { git_repo_url } from "./git_repo_url.mjs";
export async function git_repo_clone(user, repo) {
  "Fetches a copy of somebody's repo into a folder here, named after the repo.";
  "The address and the folder name are handed to git as their own words rather than joined into a line of text with spaces between them. Both are built from what the caller said, and a line of text is split back on those same spaces before it runs, so either one carrying a space stopped being one word.";
  let url = git_repo_url(user, repo);
  let folder_name = repo_path(repo);
  await git_current_run(["clone", url, folder_name]);
}
