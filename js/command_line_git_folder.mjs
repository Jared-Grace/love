import { command_line_git_folder_text } from "./command_line_git_folder_text.mjs";
import { command_line_stdout } from "./command_line_stdout.mjs";
export async function command_line_git_folder(folder, command_git) {
  ("what the git command printed: no caller has ever wanted anything else, and most want nothing at all");
  let command = command_line_git_folder_text(folder, command_git);
  let v = await command_line_stdout(command);
  return v;
}
