import { catch_ignore_async } from "../../../love/public/src/catch_ignore_async.mjs";
import { command_line_git_folder } from "../../../love/public/src/command_line_git_folder.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
export async function git_commit_folder(folder, message) {
  async function lambda() {
    await command_line_git_folder(
      folder,
      text_combine_multiple(['commit -m "', message, '"']),
    );
  }
  await catch_ignore_async(lambda);
}
