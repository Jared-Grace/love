import { git_commit_folder } from "../../../love/public/src/git_commit_folder.mjs";
import { command_line_git_folder } from "../../../love/public/src/command_line_git_folder.mjs";
export async function git_ac(folder, message) {
  await command_line_git_folder(folder, "add -A");
  await git_commit_folder(folder, message);
}
