import { command_line_git_folder } from "../../../love/public/src/command_line_git_folder.mjs";
export async function git_init(folder) {
  let r = await command_line_git_folder(folder, "init");
  return r;
}
