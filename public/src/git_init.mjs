import { command_line_git_folder } from "../../../love/public/src/command_line_git_folder.mjs";
export async function git_init(folder, command_git) {
  return await command_line_git_folder(folder, command_git);
}
