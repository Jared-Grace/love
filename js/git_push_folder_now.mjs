import { command_line_git_folder } from "./command_line_git_folder.mjs";
import { git_push_text } from "./git_push_text.mjs";
export async function git_push_folder_now(folder) {
  let command_git = git_push_text();
  await command_line_git_folder(folder, command_git);
}
