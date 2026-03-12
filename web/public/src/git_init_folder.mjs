import { command_line_git_folder } from "../../../love/public/src/command_line_git_folder.mjs";
export async function git_init_folder(folder) {
  let r = await command_line_git_folder(folder, "init");
  return r;
}
