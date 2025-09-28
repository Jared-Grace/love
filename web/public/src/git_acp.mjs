import { command_line_git_folder } from "./command_line_git_folder.mjs";
import { git_commit_folder } from "./git_commit_folder.mjs";
import { git_push } from "./git_push.mjs";
export async function git_acp(message) {
  let folder = ".";
  await command_line_git_folder(folder, "add -A");
  await git_commit_folder(folder, message);
  await git_push();
}
