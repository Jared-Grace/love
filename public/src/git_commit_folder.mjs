import { catch_ignore } from "../../../love/public/src/catch_ignore.mjs";
import { command_line_git_folder } from "../../../love/public/src/command_line_git_folder.mjs";
export async function git_commit_folder(folder, message) {
  async function lambda() {
    await command_line_git_folder(folder, `commit -m "${message}"`);
  }
  await catch_ignore(lambda, "nothing to commit");
}
