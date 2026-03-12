import { command_line_git_prefix } from "../../../love/public/src/command_line_git_prefix.mjs";
export function command_line_git_folder_text(folder, command_git) {
  let r = command_line_git_prefix() + "-C " + folder + " " + command_git;
  return r;
}
