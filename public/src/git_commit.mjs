import { command_line_git } from "./command_line_git.mjs";
import { catch_only_async } from "./catch_only_async.mjs";
export async function git_commit(message) {
  async function lambda() {
    await command_line_git(`commit -m "${message}"`);
  }
  await catch_only_async(lambda, "nothing to commit");
}
