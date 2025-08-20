import { git_commit } from "./git_commit.mjs";
import { git_push } from "./git_push.mjs";
import { command_line_git } from "./command_line_git.mjs";
export async function git_acp(message) {
  await command_line_git("add -A");
  await git_commit(message);
  await git_push();
}
