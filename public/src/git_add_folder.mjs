import { command_line_git_folder } from "../../../love/public/src/command_line_git_folder.mjs";
export async function git_add_folder(folder, added) {
  await command_line_git_folder(folder, "add " + added);
}
