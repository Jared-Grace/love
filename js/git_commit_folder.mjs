import { catch_only_async } from "../../../love/public/src/catch_only_async.mjs";
import { command_line_git_folder } from "../../../love/public/src/command_line_git_folder.mjs";
export async function git_commit_folder(folder, message) {
  async function lambda() {
    await command_line_git_folder(folder, `commit -m "${message}"`);
  }
  await catch_only_async(lambda, "nothing to commit");
}
