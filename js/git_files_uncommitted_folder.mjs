import { git_folder_run } from "./git_folder_run.mjs";
import { git_status_paths } from "./git_status_paths.mjs";
export async function git_files_uncommitted_folder(folder) {
  "Everything this folder still has to commit - the tracked files with edits in them and the ones git has never seen alike.";
  "Asked with no paths, which is the one case its neighbour refuses: there, no paths means the caller named nothing and a sweep would be a commit under a message that did not earn it. Here the whole folder is the question.";
  "The ignored files are left out by git itself, so a gitignored folder full of working files never reads as work waiting to be committed.";
  let asked = ["status", "--porcelain"];
  let stdout = await git_folder_run(folder, asked);
  let paths = git_status_paths(stdout);
  return paths;
}
