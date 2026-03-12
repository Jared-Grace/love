import { command_line_git_folder_text } from "../../../love/public/src/command_line_git_folder_text.mjs";
import { command_line } from "../../../love/public/src/command_line.mjs";
export async function command_line_git_folder(folder, command_git) {
  let command = command_line_git_folder_text(folder, command_git);
  await command_line(command);
}
