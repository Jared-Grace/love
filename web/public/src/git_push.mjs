import { command_line_git } from "./command_line_git.mjs";
import { catch_log_async } from "./catch_log_async.mjs";
import { command_line } from "./command_line.mjs";
export async function git_push() {
  const command_git = "push";
  await catch_log_async(lambda);
  async function lambda() {
    await command_line_git(command_git);
  }
}
