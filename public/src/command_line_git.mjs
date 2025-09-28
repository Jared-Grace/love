import { command_line_git_folder } from "./command_line_git_folder.mjs";
export async function command_line_git(command_git) {
  let folder = ".";
  await command_line_git_folder(folder, command_git);
}
