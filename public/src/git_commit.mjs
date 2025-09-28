import { command_line_git_folder } from "./command_line_git_folder.mjs";
import { catch_only_async } from "./catch_only_async.mjs";
export async function git_commit(message) {
  async function lambda() {
    let folder = ".";
    await command_line_git_folder(folder, `commit -m "${message}"`);
  }
  await catch_only_async(lambda, "nothing to commit");
}
