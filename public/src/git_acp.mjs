import { command_line_git_folder } from "./command_line_git_folder.mjs";
import { git_commit } from "./git_commit.mjs";
import { git_push } from "./git_push.mjs";
export async function git_acp(message) {
  let folder = ".";
  await command_line_git_folder(folder, "add -A");
  await git_commit(message);
  await git_push();
}
