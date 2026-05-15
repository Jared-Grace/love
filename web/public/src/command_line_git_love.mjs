import { command_line_git_folder } from "../../../love/public/src/command_line_git_folder.mjs";
export async function command_line_git_love(command_git) {
  let folder = ".";
  let r = await command_line_git_folder(folder, command_git);
  return r;
}
