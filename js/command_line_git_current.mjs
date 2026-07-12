import { command_line_git_folder } from "./command_line_git_folder.mjs";
export async function command_line_git_current(command_git) {
  let folder = ".";
  let r = await command_line_git_folder(folder, command_git);
  return r;
}
