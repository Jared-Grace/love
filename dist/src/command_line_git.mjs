import { command_line_git_folder } from "../../../love/public/src/command_line_git_folder.mjs";
export async function command_line_git(command_git) {
  let folder = ".";
  await command_line_git_folder(folder, command_git);
}
